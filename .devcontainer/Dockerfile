FROM node:22-slim

# セキュリティ更新を含むシステムパッケージの更新
RUN apt update && \
    apt upgrade -y && \
    apt install -y --no-install-recommends \
        git \
        bash-completion \
        openssh-client \
        curl \
        xz-utils \
        ca-certificates \
        dumb-init \
        lsof && \
    apt clean && \
    rm -rf /var/lib/apt/lists/* && \
    apt autoremove -y

# pnpmのインストール
RUN npm install -g pnpm

# 既存のnodeユーザーを削除
RUN userdel -r node || true

# non-rootユーザーの作成（より安全なUID/GID設定）
RUN groupadd -g 1001 appuser && \
    useradd -u 1001 -g appuser -s /bin/bash -m appuser

# 作業ディレクトリの作成と権限設定
RUN mkdir -p /home/appuser/workspace && \
    chown -R appuser:appuser /home/appuser/workspace

# SSHディレクトリの作成と権限設定（より厳格な権限）
RUN mkdir -p /home/appuser/.ssh && \
    chown -R appuser:appuser /home/appuser/.ssh && \
    chmod 700 /home/appuser/.ssh && \
    chmod 600 /home/appuser/.ssh/* 2>/dev/null || true

# 環境変数の設定（基本設定のみ）
ENV PNPM_HOME="/home/appuser/.local/share/pnpm" \
    PATH="$PNPM_HOME:$PATH"

# ユーザーをappuserに変更
USER appuser

# 作業ディレクトリの設定
WORKDIR /home/appuser/workspace

# より安全なデフォルトコマンド
ENTRYPOINT ["dumb-init", "--"]
CMD ["/bin/bash"]