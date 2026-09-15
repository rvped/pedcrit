# Analgossedação na UTI Pediátrica — HGVC

Edição web, para a beira-leito, do Protocolo de Analgossedação da UTI Pediátrica do Hospital Geral de Vitória da Conquista (v2.0, setembro/2026).

**Acesso:** https://rvped.github.io/analgossedacao/

- Celular (Android e iPhone): leia o QR code do cartaz e use "Adicionar à tela inicial".
- Computador (Windows): digite `rvped.github.io/analgossedacao` e instale pelo Edge ou Chrome, ou use o arquivo `Analgossedacao-UTIP.url`.
- Depois do primeiro acesso, funciona sem internet.

## Arquivos

| Arquivo | Função |
|---|---|
| `index.html` | Protocolo completo, com CSS e JS embutidos |
| `sw.js` | Uso offline e aviso de versão nova |
| `manifest.webmanifest`, `icons/` | Instalação como aplicativo |
| `qr.svg`, `qr.png` | QR code do endereço fixo |
| `cartaz.html`, `cartaz.pdf` | Cartaz A4 para afixar na unidade |
| `Analgossedacao-UTIP.url` | Atalho de área de trabalho do Windows |

## Para publicar uma atualização

1. Edite `index.html`.
2. Troque `VERSAO` em `sw.js`; é isso que faz os aparelhos receberem o aviso de versão nova.
3. Faça commit e push para `main`. O GitHub Pages publica em 1–2 minutos.

Documento de apoio à decisão clínica. Não substitui o julgamento individualizado nem a conferência de doses. Itens marcados como **proposta** aguardam validação da coordenação.
