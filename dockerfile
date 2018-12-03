FROM node:8.11.3
ENV NODE_ENV=development
RUN npm install -g vue-cli

# 雛形を生成するのに必要なパッケージのインストール
# RUN npm install -g express-generator@4.16.0

# 雛形を生成するのに必要なパッケージのインストール
# RUN npm install -g express-generator@4.16.0

# ディレクトリを移動する
# WORKDIR /myapp

# ポート3000番を開放する
EXPOSE 3000
