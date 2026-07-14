| Demo | What the Auditor Checks |
| --- | --- |
| Secure Boot | Only signed/authenticated firmware can boot |
| Boot Process | Complete chain of trust from Boot ROM to Application |
| Firmware Integrity | SHA-256 hash generation and verification |
| Firmware Upgrade | Secure firmware update process |
| TLS Communication | Encrypted communication between camera and server |
| Port Scan | Only required network ports are open |
| Certificate Validation | HTTPS/TLS certificate verification |
| Password Policy | Strong password enforcement |
| Factory Reset | Data removed after reset |
| Debug Interface | UART/JTAG disabled or protected |
| Random Number Generator | PRNG implementation |
| Memory Protection | Stack protection/ASLR/NX etc. |
| Coverity Report | Static code analysis |
| OTA Update | Secure OTA update verification |