# Run an AI Model on Your Own PC

This guide walks you through running a local language model on Windows — no cloud, no API keys, no subscription. Everything stays on your machine.

---

## What you need

- Windows 10 or 11
- At least 8 GB of RAM (16 GB gives you better results)
- Around 5 GB of free disk space per model

That's it. No GPU required, though if you have one it'll run noticeably faster.

---

## Step 1 — Install Ollama

Ollama is the tool that handles downloading and running the models. Think of it as a package manager, but for AI.

1. Go to [ollama.com](https://ollama.com) and click **Download for Windows**
2. Run the installer — it's a standard `.exe`, nothing unusual
3. Once installed, Ollama runs in the background (you'll see it in the system tray)

---

## Step 2 — Open a terminal

Press `Win + X` and choose **Terminal** or **PowerShell**.

If you've never used the terminal before: it's just a text interface where you type commands. You won't break anything.

---

## Step 3 — Download and run a model

Type this and press Enter:

```
ollama run mistral
```

The first time you run this, it'll download the Mistral 7B model (~4 GB). Once it's done, you'll land directly in a chat interface inside the terminal. Start typing.

To exit the chat, type `/bye`.

---

## Other models worth trying

| Model | Command | Good for |
|---|---|---|
| Mistral 7B | `ollama run mistral` | General use, fast |
| Llama 3.2 3B | `ollama run llama3.2` | Lightweight, good on 8 GB RAM |
| Llama 3.1 8B | `ollama run llama3.1` | Better quality, needs ~16 GB |
| Phi-3 Mini | `ollama run phi3` | Very small, runs on anything |
| Gemma 3 | `ollama run gemma3` | Google's open model |

You can browse the full list at [ollama.com/library](https://ollama.com/library).

To switch models, just run `ollama run <model-name>`. Downloaded models stay on your machine — no need to re-download.

---

## Optional — Get a proper chat interface

Talking to the model through the terminal works fine, but if you want something that looks more like ChatGPT, you can run **Open WebUI** — a browser-based interface that connects to Ollama.

You'll need Docker Desktop for this:

1. Download and install [Docker Desktop](https://www.docker.com/products/docker-desktop/)
2. Make sure Ollama is running
3. Open a terminal and run:

```
docker run -d -p 3000:8080 --add-host=host.docker.internal:host-gateway -v open-webui:/app/backend/data --name open-webui --restart always ghcr.io/open-webui/open-webui:main
```

4. Open your browser and go to `http://localhost:3000`

Done. You'll have a full chat interface running locally.

---

## What if my PC isn't powerful enough?

If your machine doesn't have enough RAM, you can rent a cloud virtual machine and run everything there. It's not free, but it's cheap for occasional use.

**Google Cloud** is a solid option — they let you run a VM with 16 GB RAM for roughly $0.10–0.15/hour. You only pay while it's running.

Basic steps:
1. Create a free account at [cloud.google.com](https://cloud.google.com) — they give you $300 in free credits
2. Create a VM (e2-standard-4 is a good starting point: 4 vCPUs, 16 GB RAM)
3. Connect via SSH, install Ollama, and follow the same steps above

The model runs on the remote machine, but you interact with it from your browser or terminal.

---

## Useful Ollama commands

```bash
ollama list              # see what models you have downloaded
ollama pull mistral      # download a model without running it
ollama rm mistral        # delete a model
ollama ps                # see what's currently running
```

---

## Common issues

**The model is slow** — This is normal without a GPU. Smaller models (3B–7B) run much faster. Try `llama3.2` or `phi3` if `mistral` feels sluggish.

**Out of memory error** — Your RAM is the bottleneck. Switch to a smaller model or close other apps while running.

**Ollama command not found** — Close the terminal and reopen it after installation. If it still doesn't work, restart your PC.

---

Questions or issues? Open a GitHub issue and I'll take a look.
