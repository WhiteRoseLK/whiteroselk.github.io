---
title: "PiHole DNS et Ad block"
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

Everithing in Vault could be do with API.

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

We can step-down a vault to tranfer the leadership to another HA member with : 
```bash
vault operator step-down
```

## Protection

**Master Key** encrypt the **Encryption Key** who encrypt **Data**