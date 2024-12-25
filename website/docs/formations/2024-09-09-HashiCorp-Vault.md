---
title: "HashiCorp Vault Associate 002"
author: Mathieu Bannwarth
---

## What is Vault ?

Vault manage Secrets and Protect Sensitive Data like :
- Username and passwords
- Certificates
- API Keys
- Encryption Keys

Vault has 3 Interfaces :
- CLI (Machines and Humans)
- UI (Humans)
- API (Machines)

Everything in Vault could be do with API.

Token Generation : 
A user authenticated to Vault with Username & Password or TLS Certificate or else.
Vault Generate a Token who is valid for 4 Hours (TTL)

Token Usage :
Someone try to retrieve Data from a Path:
Vault verify :
- Token is Valid
- Token is not Expired
- Token has Permission

If each verification is OK => Vault return the requested data.
We present our token, We don't authenticate again.

## Vault HA Cluster

To join Vault Cluster :
```bash
vault operator raft join VAULT_URL
```

After joining, we need to unseal the Vault with :
```bash
vault operator unseal
```

We can list each node in the HA with :
```bash
vault operator raft list-peers
```

We can step-down a vault to transfer the leadership to another HA member with : 
```bash
vault operator step-down
```

## Protection

**Master Key** encrypt the **Encryption Key** who encrypt **Data**

## Token

List number of token valid :
```bash
vault list auth/token/accessors
```

**Periodic Token**
Root and sudo have the ability to generate periodic token.

Periodic token have a TTL but no max TTL

This token may live infinitely if they are renew before TTL expiration.
```bash
vault token create -period=24h
```

**Service Token with Use Limits**
When we need to limit the number of request coming to Vault from a particular token.

Use limit token expire at the end of their last use or at the end of their TTL.
```bash
vault token create -use-limit=2
```

**Orphan Token**
Root and sudo have the ability to generate orphan token.

Orphan are not children of their parent so they do not expire when their parent does.
```bash
vault token create -orphan
```

**CIDR-Bound Token**
Can be used to restrict a token to be used by a specific host or within a certain network block.

**Batch Token**
If we need a token who can be replicated to all other Vault Clusters or if we need to reduce the overhead of storage when creating a large number of tokens.

We can configure Auth Method to generate a specific type of token.

- Vault token
  - capabilities
    - Look at Metadata
  - create
    - Create a token
  - lookup
    - Show token information globally or in a particular path
  - renew
    - Renew a token
  - revoke
    - Revoke a token

Root token need to be revoke after each use.
To create a new root token we can create one when login with another root token :
```bash
vault token create
```

Or we can create root token with a quorum of unseal key :
```bash
vault operator generate-root -init
```
Get the OTP code.
use recovery key with :
```bash
vault operator generate-root
```
At the end we get the Encrypted root token.

To decode the root token :
```bash
vault operator generate-root -opt="OTP" -decode="ENCRYPTED_ROOT_TOKEN"
```

Finally we got a root token.

## Token Accessors
Token Accessors can be use for limited action like :
- Revoke a token
- Renew a token
- Lookup token capability
- Lookup token properties

We cannot use token accessors to authenticated through Vault.

Default TTL for token is 32 days

## Cubbyhole
Cubbyhole is enable by default and cannot be disable.
It is a personnal store for each token
Each token have its own cubbyhole.
Cubbyhole expire when token expire

To wrap a secret just add -wrap-ttl= to the command
