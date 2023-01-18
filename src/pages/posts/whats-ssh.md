---
layout: ../../layouts/Post.astro
title: What's SSH?
author: reyes
pubDate: 2021/12/24
tag: tech
---

Have you wonder how your information is secured when traveling across the internet? **Secure Shell (SSH)** is one of the protocols whose tasks is to secure the data while traveling between two computers. SSH was created to replace Telnet, and other unsecured protocols.

Even though SSH is usually used to remotely access another computer, it can also be used to secure any network service.

While protocols like Telnet use to just send the data in plain text (without any encryption), SSH does encrypt the payload (data) sent over the network, this way, if anyone intercept the packages, they cannot read anything of them.

## How does SSH works?

During the communication between the two computers, SSH uses three different encryption methods:

- Symmetric Encryption
- Asymmetric Encryption
- Hashing

Let's explain each one briefly.

### Symmetric Encryption

This encryption method uses one generated key for encryption and decryption of the messages between the machines (the key is shared between computers).

> This generated key is often called <strong class="glow">shared key</strong>.

A shared key is used to encrypt all communication between the computers while the SSH session is active.

To get this key, both computers agree on a method to generate it. To understand why it's secure, let's learn what the **Diffie-Hellman Algorithm** is:

1. Both computers agree on a large prime number, this will be the seed value.

2. Both computers agree on an encryption method, the most common is [AES](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard).

3. Then each computer generate another prime number (kind of a private key), this one is never shared.

4. Using the agreed encryption method, the large prime number shared between the computers and it's private prime number, each computer generates a public key.

5. Both the computers exchange their generated public keys.

6. Using their private prime number, the other computer's public key and the original shared prime number, each one generates a shared key (by using the opposite public key, they end with the same key).

7. The generated shared key is used to encrypt all the communication between the computers.

> The shared key is <strong class="glow">session-based</strong>.

### Asymmetric Encryption

The next encryption method uses two keys, the **private key** and the **public key**. While the _public key_ can be shared with anyone, the private one should remain, as the name says, private.

This method uses an algorithm that let the computer encrypt the data with a mathematical relationship between the _public key_ and the _private key_, but it can only be decrypted with the _private key_.

> This encryption method is often used as <strong class="glow">authentication</strong>

### Hashing

Cryptographic hashing are methods that let the computers create something like a _fingerprint_, the advantage of this process is that it can't be reversed. Hashing the same data, (with the same hashing function, end with the same "fingerprint".

This method is used to prove data integrity between the communication, they share their generated hash and data, if the computer receiving the package cannot match the received "fingerprint" by hashing the data itself, then the data was compromised and changed.

## How does SSH uses these encryption methods?

A quick overview of how these three methods are used is something like this:

1. When starting the SSH connection, the _Asymmetric Encryption_ is used to authenticate the session.

2. After the session was authenticated, they generate a shared key using _Symmetric Encryption_.

3. _Hashing_ is used to ensure that each received package isn't modified.
