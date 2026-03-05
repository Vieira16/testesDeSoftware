# Roteiro de Teste Automatizado com Selenium

## Objetivo
Validar o funcionamento de um script automatizado utilizando Selenium WebDriver para abrir um navegador, acessar uma página web e executar uma ação.

## Cenário de Teste
Automação de uma pesquisa no Google.

## Caso de Teste 01 — Abrir página do Google

Passos:
1. Executar o script Selenium.
2. Abrir o navegador Google Chrome.
3. Acessar o endereço https://www.google.com.

Resultado Esperado:
A página inicial do Google deve ser carregada corretamente.

---

## Caso de Teste 02 — Realizar pesquisa

Passos:
1. Localizar o campo de pesquisa do Google.
2. Digitar "Youtube".
3. Pressionar ENTER.

Resultado Esperado:
A página de resultados da pesquisa deve aparecer.

---

## Caso de Teste 03 — Validar resultados

Passos:
1. Verificar se existem resultados exibidos na página.

Resultado Esperado:
A página deve mostrar links relacionados à pesquisa realizada.

---

## Ferramentas Utilizadas

- Node.js
- Selenium WebDriver
- Google Chrome
- ChromeDriver

---

## Resultado Esperado Geral

O script deve abrir o navegador, realizar a pesquisa e exibir os resultados sem erros.