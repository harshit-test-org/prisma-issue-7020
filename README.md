## Introduction

This repository contains reproduction for https://github.com/prisma/prisma/issues/7020

THIS IS A MACOS ONLY BUG

## Steps

1. Clone, install deps and edit prisma/.env
2. Run `prisma migrate reset --preview-feature`
3. Run `ps aux | grep query-engine` and notice the hanging process
