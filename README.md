# Automação de Solicitações ao RH  

## Descrição  
Este projeto utiliza **Google Apps Script** para automatizar o envio de notificações por e-mail sobre o status de solicitações ao RH, com base em dados gerenciados no Google Sheets.  

## Funcionalidades  
- Envio de notificações automáticas com mensagens personalizadas para cada status:  
  - **Em verificação:** Informa que a solicitação está sendo analisada.  
  - **Resolvido:** Confirma a conclusão da solicitação.  
  - **Aguardando resposta:** Solicita retorno do colaborador para continuidade.  
  - **Cancelada:** Notifica o motivo do cancelamento.  
- Redução de processos manuais e centralização da gestão no Google Sheets.  

## Tecnologias Utilizadas  
- **Google Apps Script**  
- **Google Sheets**  
- **Gmail API**  

## Como Usar  
1. Configure uma planilha no Google Sheets com as colunas necessárias: Nome, E-mail, Solicitação, Status e Motivo do Cancelamento.  
2. Insira o código no editor do Google Apps Script vinculado à planilha.  
3. Ative o gatilho `onEdit` para que a função seja executada automaticamente ao editar os dados.  

## Impacto  
- Agilidade no atendimento de solicitações.  
- Melhoria na experiência dos colaboradores com respostas rápidas e organizadas.  

## Contribuições  
Contribuições são bem-vindas! Abra issues ou envie pull requests para melhorias.  


