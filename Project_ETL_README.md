# Daily Sales ETL Pipeline

An end-to-end ETL pipeline that consolidates solar energy installation sales data — enriched with weather and geographic information — into a structured MySQL analytical warehouse.

Built with a config-driven architecture so that input files, column mappings, date fields, and deduplication keys can all be modified through a single YAML file without touching the code.

---

## The problem it solves

Sales operations in the energy sector generate data across multiple sources: CRM exports with the full sales funnel (from lead to signed contract to technical review), weather records that affect demand patterns, and geographic data for territory analysis.

This pipeline takes those heterogeneous CSV files, cleans and enriches them in a reproducible way, and loads the results idempotently into analytical tables ready for BI tooling or further analysis.

---

## Pipeline overview

```
CSV files (sales funnel, weather, zipcodes)
        │
        ▼
   [Extract]  Load CSVs into DataFrames via config mapping
        │
        ▼
  [Transform] Normalize dates and zipcodes
              Rescale peak power values
              Derive KO, customer, and offer dimension tables
        │
        ▼
    [Load]    Idempotent INSERT IGNORE into MySQL warehouse
```

**Output tables:**
- `sales` — full funnel with contract and visit dates
- `meteo` — daily weather records by zipcode
- `zipcodes` — geographic reference table
- `ko_table` — lost sales with reason and date
- `customer_dim` — customer dimension
- `offer_dim` — offer-level dimension

---

## Tech stack

| Layer | Tools |
|---|---|
| Language | Python 3.9+ |
| Data processing | pandas |
| Database connectivity | SQLAlchemy · pymysql |
| Configuration | PyYAML |
| Warehouse | MySQL |

---

## Project structure

```
project/
├── extract/
│   ├── csv_extractor.py       # Load CSV files into DataFrames
│   └── mysql_extractor.py     # Read existing MySQL data for enrichment
├── transform/
│   ├── cleaning.py            # Date/zipcode normalization, peak power rescaling
│   └── enrichment.py         # Derive KO, customer, and offer datasets
├── load/
│   └── to_warehouse.py        # MySQL engine + idempotent loader
├── utils/
│   ├── dataframe.py           # Generic DataFrame helpers
│   └── loggers.py             # Centralized logger configuration
├── config/
│   └── pipeline.yml           # All pipeline configuration (paths, columns, keys)
└── pipelines/
    └── daily_sales.py         # Main orchestrator
```

---

## Configuration

All pipeline behaviour is defined in `config/pipeline.yml`. No hardcoded values in the source code.

```yaml
data_dir: ./data

csv_to_table:
  meteo.csv: meteo
  zipcodes.csv: zipcodes
  sale_phases_funnel.csv: sales

date_columns:
  meteo:
    - DATE
  sales:
    - OFFER_SENT_DATE
    - CONTRACT_1_SIGNATURE_DATE
    - VISIT_DATE
    - TECHNICAL_REVIEW_DATE
    - PROJECT_VALIDATION_DATE
    - KO_DATE

partition_date_column:
  meteo: DATE
  sales: OFFER_SENT_DATE

key_columns:
  zipcodes: [ZIPCODE]
  meteo: [DATE, ZIPCODE]
  sales: [LEAD_ID]
  ko_table: [LEAD_ID, KO_DATE]
  customer_dim: [CUSTOMER_ID]
  offer_dim: [LEAD_ID, LAST_MODIFIED_DATE]
```

Database credentials are stored in `config/secrets.yml` (not versioned):

```yaml
mysql:
  host: localhost
  port: 3306
  user: your_user
  password: your_password
  database: your_database
```

---

## Setup and execution

**1. Install dependencies**

```bash
pip install pandas sqlalchemy pymysql pyyaml
```

**2. Add your input CSV files to `./data/`** and update `pipeline.yml` with the correct filenames and column mappings.

**3. Create `config/secrets.yml`** with your MySQL credentials (see template above).

**4. Run the pipeline**

```bash
python -m pipelines.daily_sales
```

The pipeline will extract, transform, and load all configured tables. Existing rows are skipped on re-runs (`INSERT IGNORE`), making it safe to execute daily on a schedule.

---

## Key design decisions

**Config-driven** — adding a new CSV source or renaming columns only requires updating `pipeline.yml`, not the code.

**Idempotent loading** — using `INSERT IGNORE` with explicit key columns means the pipeline can be re-run safely without duplicating data.

**Modular structure** — extract, transform, and load layers are fully separated, making each stage independently testable and replaceable.

**Centralized logging** — all pipeline steps share the same logger configuration, giving a consistent audit trail across runs.
