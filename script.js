function enviarNotificacao(e) {
    var sheet = e.source.getActiveSheet(); 
    var linha = e.range.getRow(); 
    var statusColuna = 12; // Coluna L é a coluna 12 (status)
    var emailColuna = 4;   // Coluna onde está o e-mail (ajuste conforme necessário)
    var nomeColuna = 2;    // Coluna B é a coluna 2 (nome do colaborador)
    var solicitacaoColuna = 8; // Coluna H é a coluna 8 (nome da solicitação ao RH)
    var motivoCancelamentoColuna = 13; // Coluna M para o motivo do cancelamento
    
    var status = sheet.getRange(linha, statusColuna).getValue();
    var email = sheet.getRange(linha, emailColuna).getValue();
    var nome = sheet.getRange(linha, nomeColuna).getValue();
    var solicitacao = sheet.getRange(linha, solicitacaoColuna).getValue();
    var motivoCancelamento = sheet.getRange(linha, motivoCancelamentoColuna).getValue();
    
    var assunto = "Atualização do Status da Sua Solicitação ao RH";
    var mensagem = ""; // Iniciamos a mensagem como vazia
  
    // Verificamos o status e personalizamos a mensagem com base nele
    if (status === "Em verificação") {
      mensagem = "Prezado(a) " + nome + ",\n\n" +
                 "Informamos que sua solicitação referente a \"" + solicitacao + "\" está em processo de verificação. " +
                 "Manteremos você atualizado(a) sobre o andamento e notificaremos assim que houver novas informações.\n\n" +
                 "Atenciosamente,\nAtilla GRH - Colégio Atilla Curumim";
    } else if (status === "Resolvido") {
      mensagem = "Prezado(a) " + nome + ",\n\n" +
                 "Sua solicitação referente a \"" + solicitacao + "\" foi concluída. Caso tenha mais alguma dúvida ou necessite de assistência adicional, " +
                 "não hesite em entrar em contato conosco.\n\n" +
                 "Atenciosamente,\nÁtila GRH - Colégio Atilla Curumim";
    } else if (status === "Aguardando resposta") {
      mensagem = "Prezado(a) " + nome + ",\n\n" +
                 "Estamos aguardando seu retorno em relação à sua solicitação referente a \"" + solicitacao + "\". " +
                 "Por favor, nos envie a resposta o quanto antes para que possamos dar seguimento ao processo.\n\n" +
                 "Atenciosamente,\nÁtila GRH - Colégio Atilla Curumim";
    } else if (status === "Cancelada") {
      mensagem = "Prezado(a) " + nome + ",\n\n" +
                 "Sua solicitação referente a \"" + solicitacao + "\" foi cancelada pelo seguinte motivo: " +
                 "\"" + motivoCancelamento + "\". Se precisar de mais informações ou ajuda, estamos à disposição.\n\n" +
                 "Atenciosamente,\nÁtila GRH - Colégio Atilla Curumim";
    }
    
    // Enviar o e-mail apenas se o status for adequado
    if (mensagem !== "") {
      MailApp.sendEmail(email, assunto, mensagem);
    }
  }
  
  function onEdit(e) {
    enviarNotificacao(e);
  }
  