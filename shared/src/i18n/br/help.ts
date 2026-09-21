import type { TranslationStrings } from '../types';

// English fallback until 'br' is translated.
const help: TranslationStrings = {
  'help.title': 'Help & Docs',
  'help.search': 'Search docs…',
  'help.contents': 'Contents',
  'help.noResults': 'No matching pages.',
  'help.errorTitle': "Couldn't load this page",
  'help.errorBody': 'The help content is fetched from the TREK wiki. Check your connection and try again.',

  // center
  'help.center.button': 'Ajuda para esta tela',
  'help.center.title': 'Ajuda',
  'help.center.onThisScreen': 'Nesta tela',
  'help.center.screens': 'Telas',
  'help.center.thisScreen': 'Esta tela',
  'help.center.subScreens': 'Subtelas: {count}',
  'help.center.subScreensLabel': 'Subtelas',
  'help.center.guidesCount': '{count} guias',
  'help.center.goToScreen': 'Ir para {screen}',
  'help.center.overview': 'Visão geral',
  'help.center.howTo': 'Como faço para…',
  'help.center.searchPlaceholder': 'Buscar em guias e documentação…',
  'help.center.searchEmpty': 'Nada encontrado para “{query}”.',
  'help.center.searchGuides': 'Guias',
  'help.center.searchDocs': 'Documentação',
  'help.center.searchError': 'A busca não está disponível no momento.',
  'help.center.back': 'Voltar',
  'help.center.close': 'Fechar ajuda',
  'help.center.steps': '{count} passos',
  'help.center.step': 'Passo {n}',
  'help.center.stepsLabel': 'Passos',
  'help.center.stepOf': 'Passo {n} de {total}',
  'help.center.screenshot': 'Captura',
  'help.center.result': 'O resultado',
  'help.center.tips': 'Bom saber',
  'help.center.related': 'Relacionado',
  'help.center.openDocs': 'Abrir em Ajuda e documentação',
  'help.center.docsSection': 'Na documentação',
  'help.center.noContext': 'Ainda não há guia para esta tela.',
  'help.center.noContextHint': 'Busque na documentação ou conte para nós o que você procurava.',
  'help.center.feedback': 'Falta alguma coisa?',
  'help.center.feedbackLink': 'Conte para nós no GitHub',
  'help.center.discord': 'Pergunte no Discord',
  'help.center.quick': 'Rápido',
  'help.center.guide': 'Guia',
  'help.center.tour': 'Demonstração',
  'help.center.imageAlt': 'Passo {n} de “{title}”',

  // ctx
  'help.ctx.dashboard.title': 'Painel',
  'help.ctx.dashboard.summary':
    'O painel é a porta de entrada de todas as suas viagens. O cartão de embarque no topo destaca a viagem em andamento ou a próxima, a linha abaixo conta o quanto você já viajou, e os cartões listam tudo o que você está planejando, arquivou ou já concluiu.',
  'help.ctx.dashboard.bullet.1':
    'Cartão de embarque: a viagem em andamento ou a próxima, com datas, viajantes, lugares e uma contagem regressiva. Clique nele para abrir a viagem.',
  'help.ctx.dashboard.bullet.2':
    'Estatísticas: países visitados, viagens, dias na estrada e distância voada, somando todas as suas viagens.',
  'help.ctx.dashboard.bullet.3':
    'Cartões de viagem, filtrados por Planejadas, Arquivada e Concluído, em grade ou lista. Passe o mouse em um cartão para editar, duplicar, arquivar e excluir.',
  'help.ctx.dashboard.bullet.4':
    'Widgets à direita: conversor de moedas, relógios mundiais, próximas reservas e coleções. Cada um pode ser desligado.',
  'help.ctx.dashboard.bullet.5': 'O cartão “Nova viagem” e o botão no canto inferior direito iniciam uma nova viagem.',

  // create-trip
  'help.guide.create-trip.title': 'Criar uma viagem',
  'help.guide.create-trip.goal': 'Começar uma nova viagem com nome, datas e foto de capa.',
  'help.guide.create-trip.step.1':
    'Clique em “Nova viagem”. O cartão no fim das suas viagens e o botão no canto inferior direito fazem a mesma coisa.',
  'help.guide.create-trip.step.2':
    'Dê um nome à viagem. É o único campo obrigatório; todo o resto pode ser adicionado depois.',
  'help.guide.create-trip.step.3':
    'Escolha a data de início e de fim. O TREK cria um dia por data, então seu roteiro já fica pronto para preencher.',
  'help.guide.create-trip.step.4':
    'Opcional: adicione uma foto de capa. Envie a sua, arraste uma ou busque o destino no Unsplash.',
  'help.guide.create-trip.step.5': 'Clique em “Criar nova viagem”.',
  'help.guide.create-trip.result':
    'A viagem aparece no seu painel. Se for a próxima, ela assume o cartão de embarque no topo.',
  'help.guide.create-trip.tip.1':
    'As datas podem ser alteradas depois. Se já houver reservas, o TREK pergunta se elas devem ser movidas junto com os dias.',
  'help.guide.create-trip.tip.2':
    'A moeda da viagem escolhida aqui é aquela para a qual cada gasto é convertido. Escolha a moeda do destino.',

  // edit-trip
  'help.guide.edit-trip.title': 'Editar uma viagem',
  'help.guide.edit-trip.goal': 'Renomear uma viagem, mudar as datas ou ajustar as configurações.',
  'help.guide.edit-trip.step.1': 'Passe o mouse no cartão da viagem (ou no cartão de embarque) e clique no lápis.',
  'help.guide.edit-trip.step.2': 'Mude o que precisar: nome, descrição, datas, capa, moeda, lembrete ou membros.',
  'help.guide.edit-trip.step.3': 'Clique em “Atualizar”.',
  'help.guide.edit-trip.result': 'O cartão é atualizado na hora, para todos os membros da viagem.',
  'help.guide.edit-trip.tip.1':
    'Mover as datas de uma viagem que já tem reservas abre um segundo passo perguntando se as reservas também devem ser movidas.',

  // cover-image
  'help.guide.cover-image.title': 'Definir uma foto de capa',
  'help.guide.cover-image.goal': 'Dar à viagem uma imagem que aparece no cartão e no cartão de embarque.',
  'help.guide.cover-image.step.1': 'Abra o formulário de edição da viagem pelo lápis no cartão dela.',
  'help.guide.cover-image.step.2':
    'Em “Imagem de capa”, solte uma foto, clique para enviar uma ou digite um destino na busca do Unsplash.',
  'help.guide.cover-image.step.3': 'Escolha uma foto e clique em “Atualizar”.',
  'help.guide.cover-image.result': 'A foto é salva com a viagem e aparece em todo lugar onde a viagem é listada.',
  'help.guide.cover-image.tip.1':
    'Fotos da busca do Unsplash recebem crédito automaticamente; seus próprios envios ficam no seu servidor.',

  // duplicate-trip
  'help.guide.duplicate-trip.title': 'Duplicar uma viagem',
  'help.guide.duplicate-trip.goal': 'Reaproveitar uma viagem como modelo para uma nova.',
  'help.guide.duplicate-trip.step.1': 'Passe o mouse no cartão e clique no ícone de duplicar.',
  'help.guide.duplicate-trip.step.2': 'Leia o que será copiado e o que não será, depois confirme.',
  'help.guide.duplicate-trip.result':
    'Uma cópia aparece ao lado da original, pronta para ser renomeada e receber novas datas.',
  'help.guide.duplicate-trip.tip.1':
    'Dias, lugares, reservas, itens do orçamento, listas de bagagem e notas dos dias vêm junto. Membros, chat, enquetes, arquivos e links de compartilhamento não.',

  // archive-trip
  'help.guide.archive-trip.title': 'Arquivar e restaurar uma viagem',
  'help.guide.archive-trip.goal': 'Guardar uma viagem sem excluir e trazê-la de volta depois.',
  'help.guide.archive-trip.step.1': 'Passe o mouse no cartão e clique em “Arquivar”.',
  'help.guide.archive-trip.step.2': 'Mude o filtro acima dos cartões para “Arquivada” para vê-la de novo.',
  'help.guide.archive-trip.step.3': 'Clique em “Restaurar” no cartão para devolvê-la a “Planejadas”.',
  'help.guide.archive-trip.result':
    'Viagens arquivadas mantêm tudo. Elas só deixam de ocupar o painel e o feed de calendário de todas as viagens.',

  // delete-trip
  'help.guide.delete-trip.title': 'Excluir uma viagem',
  'help.guide.delete-trip.goal': 'Remover uma viagem de vez.',
  'help.guide.delete-trip.step.1': 'Passe o mouse no cartão e clique na lixeira.',
  'help.guide.delete-trip.step.2':
    'Confirme. A caixa de diálogo mostra o nome da viagem, para você ter certeza de que é a certa.',
  'help.guide.delete-trip.result':
    'A viagem, seus dias, lugares, reservas e arquivos somem. Não dá para desfazer; na dúvida, arquive.',

  // filter-and-view
  'help.guide.filter-and-view.title': 'Encontrar viagens concluídas, alternar entre grade e lista',
  'help.guide.filter-and-view.goal': 'Ver viagens concluídas ou arquivadas e escolher o layout que você prefere.',
  'help.guide.filter-and-view.step.1':
    'Use “Planejadas”, “Arquivada” e “Concluído” acima dos cartões. Concluído é toda viagem cuja data de fim já passou.',
  'help.guide.filter-and-view.step.2': 'Clique no ícone de lista para uma lista compacta; clique de novo para a grade.',
  'help.guide.filter-and-view.result': 'O painel lembra o seu layout neste dispositivo.',

  // calendar-feed
  'help.guide.calendar-feed.title': 'Assinar todas as viagens no seu calendário',
  'help.guide.calendar-feed.goal':
    'Ver os dias e reservas de cada viagem ativa no seu app de calendário, sempre sincronizados.',
  'help.guide.calendar-feed.step.1': 'Clique no ícone de calendário ao lado do seletor de visualização.',
  'help.guide.calendar-feed.step.2': 'Clique em “Enable calendar subscription”. O TREK gera um link privado do feed.',
  'help.guide.calendar-feed.step.3':
    'Adicione o feed com um dos botões (Google, Apple, Outlook) ou copie o link em qualquer app de calendário que assine URLs.',
  'help.guide.calendar-feed.result':
    'Cada viagem ativa aparece no seu calendário e se atualiza sozinha. Viagens arquivadas e as que terminaram há mais de 90 dias ficam de fora.',
  'help.guide.calendar-feed.tip.1':
    'O link é um segredo. Quem o tiver pode ler o feed; revogue-o na mesma caixa de diálogo se ele vazar.',

  // widgets
  'help.guide.widgets.title': 'Escolher os widgets do painel',
  'help.guide.widgets.goal': 'Mostrar ou ocultar a linha de estatísticas e os widgets à direita.',
  'help.guide.widgets.step.1': 'Abra o menu do seu avatar no canto superior direito e escolha “Configurações”.',
  'help.guide.widgets.step.2': 'Vá para a aba “Appearance”.',
  'help.guide.widgets.step.3':
    'Em “Dashboard widgets”, ligue ou desligue cada widget. Desktop e celular são configurados separadamente.',
  'help.guide.widgets.step.4': 'Volte ao painel. A mudança vale na hora.',
  'help.guide.widgets.result':
    'Widgets ocultos liberam espaço para as suas viagens; desligue toda a coluna da direita para centralizar o layout.',
  'help.guide.widgets.link': 'Abrir as configurações de aparência',

  // currency-widget
  'help.guide.currency-widget.title': 'Converter moedas',
  'help.guide.currency-widget.goal': 'Converter um valor entre duas moedas com as cotações atuais.',
  'help.guide.currency-widget.step.1': 'Digite o valor e escolha as duas moedas.',
  'help.guide.currency-widget.step.2': 'A seta entre elas troca o par; a seta circular atualiza a cotação.',
  'help.guide.currency-widget.result':
    'Seu par de moedas fica salvo na sua conta, então é o mesmo em todos os dispositivos.',
  'help.guide.currency-widget.tip.1': 'As cotações vêm do Banco Central Europeu e são atualizadas uma vez por dia.',

  // timezones-widget
  'help.guide.timezones-widget.title': 'Adicionar relógios mundiais',
  'help.guide.timezones-widget.goal': 'Ficar de olho na hora local dos seus destinos.',
  'help.guide.timezones-widget.step.1': 'Clique em + no widget “Fusos horários” e busque uma cidade.',
  'help.guide.timezones-widget.step.2': 'Remova um relógio com o × ao lado.',
  'help.guide.timezones-widget.result': 'Seus relógios ficam salvos com a sua conta.',

  // ── Screen: vacay ──────────────────────────────────────────────────────────
  'help.ctx.vacay.title': 'Vacay',
  'help.ctx.vacay.summary':
    'O Vacay é o seu planejador pessoal de férias: quantos dias você tem no ano, quais já registrou e quantos restam. A grade mostra o ano inteiro de relance; a barra lateral reúne o seletor de ano, as pessoas com quem você planeja, calendários compartilhados com você, a legenda e o seu saldo.',
  'help.ctx.vacay.bullet.1':
    'Grade anual: doze cartões de mês, uma célula por dia. Clique em um dia para registrar ou apagar. Um pontinho azul marca os dias que uma viagem já cobre.',
  'help.ctx.vacay.bullet.2':
    'Barra inferior: modo Férias ou Feriado da empresa, mais as chaves Meio dia e Banco de horas que mudam o que um clique registra.',
  'help.ctx.vacay.bullet.3':
    'Direito: seus dias do ano, quantos foram usados e quantos restam, com o saldo transferido do período anterior.',
  'help.ctx.vacay.bullet.4':
    'Pessoas são quem está fundido ao seu plano, cada uma com sua cor. Calendários compartilhados são anéis somente leitura das folgas de outras pessoas.',
  'help.ctx.vacay.bullet.5':
    'As configurações cobrem fins de semana, início da semana, transferência de saldo, seu ano de férias, feriados da empresa e calendários de feriados ou férias escolares.',
  // log-day
  'help.guide.log-day.title': 'Registrar um dia de férias',
  'help.guide.log-day.goal': 'Marcar uma folga na grade do ano e ver o saldo acompanhar.',
  'help.guide.log-day.step.1':
    'Olhe a barra inferior: o botão da esquerda, na sua cor, significa que um clique registra um dia de férias para você.',
  'help.guide.log-day.step.2':
    'Clique em um dia em qualquer cartão de mês. Ele se preenche com a sua cor e Usados conta um dia a mais.',
  'help.guide.log-day.step.3': 'Clique de novo no mesmo dia para apagar.',
  'help.guide.log-day.result':
    'O dia fica registrado, Dias, Usados e Restantes atualizam na hora, e quem estiver fundido ao seu plano vê ao vivo.',
  'help.guide.log-day.tip.1':
    'Fins de semana não podem ser registrados enquanto Bloquear fins de semana estiver ligado nas Configurações.',
  'help.guide.log-day.tip.2':
    'Um ponto azul em uma célula significa que uma das suas viagens cobre aquele dia, então você vê onde férias e viagem coincidem.',
  // half-day
  'help.guide.half-day.title': 'Registrar meio dia',
  'help.guide.half-day.goal': 'Tirar uma tarde sem gastar um dia inteiro de saldo.',
  'help.guide.half-day.step.1': 'Ligue Meio dia na barra. O ponto laranja é a marca que um meio dia recebe na grade.',
  'help.guide.half-day.step.2': 'Clique em um dia. Ele é registrado como 0,5 e leva o ponto laranja no canto.',
  'help.guide.half-day.step.3':
    'Desligue Meio dia quando terminar; clicar em um meio dia com outras configurações o converte no lugar.',
  'help.guide.half-day.result':
    'Usados cresce 0,5. Meio dia e Banco de horas são independentes, então meio dia de compensação também é possível.',
  'help.guide.half-day.tip.1':
    'A barra sempre mostra a marca que o próximo clique vai colocar, para você conferir antes de registrar.',
  // comp-day
  'help.guide.comp-day.title': 'Registrar compensação ou flex',
  'help.guide.comp-day.goal': 'Tirar folga compensatória que não custa dias de férias.',
  'help.guide.comp-day.step.1':
    'Ligue Banco de horas na barra. O disco hachurado é a aparência de um dia de compensação na grade.',
  'help.guide.comp-day.step.2':
    'Clique em um dia. Ele se preenche com listras diagonais na sua cor em vez de um bloco sólido.',
  'help.guide.comp-day.result':
    'Dias de compensação são contados ao lado dos cartões de saldo e nunca reduzem Restantes.',
  'help.guide.comp-day.tip.1':
    'Horas extras compensadas, banco de horas, um dia de folga compensatória: tudo que é folga mas não férias entra aqui.',
  // entitlement
  'help.guide.entitlement.title': 'Definir seu saldo de férias',
  'help.guide.entitlement.goal': 'Dizer ao Vacay quantos dias de férias você tem no ano.',
  'help.guide.entitlement.step.1': 'Na barra lateral, clique no cartão Dias em Direito.',
  'help.guide.entitlement.step.2': 'Digite seu número de dias e pressione Enter.',
  'help.guide.entitlement.result':
    'Restantes é recalculado a partir do seu saldo, de qualquer transferência e dos dias usados.',
  'help.guide.entitlement.tip.1': 'Cada ano tem seu próprio saldo, então uma mudança aqui afeta só o ano selecionado.',
  // years
  'help.guide.years.title': 'Adicionar e trocar de ano',
  'help.guide.years.goal': 'Já planejar o ano que vem, ou rever o anterior.',
  'help.guide.years.step.1':
    'Clique no + à direita do ano para adicionar o próximo, ou no + à esquerda para o anterior.',
  'help.guide.years.step.2': 'Troque de ano com as setas ou com as fichas de ano logo abaixo.',
  'help.guide.years.step.3':
    'Para remover um ano, passe o mouse na ficha dele e clique no pequeno menos. As entradas dele vão junto, então confirme com cuidado.',
  'help.guide.years.result': 'Cada ano mantém seu próprio saldo e suas entradas; a transferência liga um ao outro.',
  // company-holidays
  'help.guide.company-holidays.title': 'Marcar feriados da empresa',
  'help.guide.company-holidays.goal':
    'Bloquear os dias em que a empresa inteira está de folga sem gastar o saldo de ninguém.',
  'help.guide.company-holidays.step.1':
    'Abra as Configurações e confira se Feriados da empresa está ligado. É o padrão; a barra só oferece o modo enquanto estiver ligado.',
  'help.guide.company-holidays.step.2': 'De volta à grade, coloque a barra no modo Feriado da empresa.',
  'help.guide.company-holidays.step.3': 'Clique nos dias. Eles ficam âmbar e aparecem na legenda.',
  'help.guide.company-holidays.result':
    'Feriados da empresa são visíveis para todos que estão fundidos ao plano e nunca reduzem Restantes.',
  'help.guide.company-holidays.tip.1':
    'Qualquer pessoa fundida pode editar os feriados da empresa, então combinem quem cuida deles.',
  // public-holidays
  'help.guide.public-holidays.title': 'Mostrar feriados',
  'help.guide.public-holidays.goal': 'Colocar na grade os feriados do seu país ou região.',
  'help.guide.public-holidays.step.1': 'Abra as Configurações e ligue Feriados nacionais.',
  'help.guide.public-holidays.step.2':
    'Clique em Adicionar calendário, escolha o país e, quando fizer diferença, a região. Dê uma cor e um rótulo se quiser.',
  'help.guide.public-holidays.step.3': 'Feche as Configurações. Os feriados aparecem na grade e na legenda.',
  'help.guide.public-holidays.result': 'Feriados são marcados na cor do calendário e nunca contam contra o seu saldo.',
  'help.guide.public-holidays.tip.1':
    'Você pode adicionar vários calendários, por exemplo a sua região e a de um colega fundido.',
  // school-holidays
  'help.guide.school-holidays.title': 'Mostrar férias escolares',
  'help.guide.school-holidays.goal': 'Ver as férias escolares da sua região ao lado das suas próprias folgas.',
  'help.guide.school-holidays.step.1': 'Abra as Configurações e ligue School Holidays.',
  'help.guide.school-holidays.step.2':
    'Clique em Adicionar calendário e escolha o país. Onde um país divide o calendário, escolha também a região ou o grupo.',
  'help.guide.school-holidays.step.3':
    'Feche as Configurações. Cada período recebe uma faixa colorida na parte de baixo dos seus dias.',
  'help.guide.school-holidays.result': 'Férias escolares são puramente visuais: nunca reduzem o saldo de ninguém.',
  'help.guide.school-holidays.tip.1':
    'Falta a sua região? O administrador pode manter férias escolares à mão em Admin, Personalização, Férias escolares.',
  // weekends
  'help.guide.weekends.title': 'Bloquear fins de semana e definir o início da semana',
  'help.guide.weekends.goal':
    'Manter os fins de semana fora da contagem e começar a semana no dia a que você está acostumado.',
  'help.guide.weekends.step.1': 'Abra as Configurações.',
  'help.guide.weekends.step.2': 'Ligue Bloquear fins de semana e escolha quais dias contam como seu fim de semana.',
  'help.guide.weekends.step.3': 'Em Semana começa em, escolha segunda ou domingo.',
  'help.guide.weekends.result': 'Dias bloqueados ficam acinzentados na grade e não podem ser registrados por engano.',
  // leave-year
  'help.guide.leave-year.title': 'Definir seu ano de férias',
  'help.guide.leave-year.goal':
    'Contar seu saldo por ano fiscal ou a partir da data de contratação em vez de janeiro a dezembro.',
  'help.guide.leave-year.step.1': 'Abra as Configurações e encontre Ano de férias.',
  'help.guide.leave-year.step.2':
    'Escolha Calendário, Fiscal (com o mês e o dia em que começa) ou Admissão (com a data em que você foi contratado).',
  'help.guide.leave-year.result':
    'Saldo, dias usados e transferência seguem esse período, e a grade começa pelo primeiro mês dele.',
  'help.guide.leave-year.tip.1':
    'Esta configuração é pessoal: em um plano fundido cada um mantém seu próprio ano de férias e seus números.',
  // carry-over
  'help.guide.carry-over.title': 'Transferir dias não usados',
  'help.guide.carry-over.goal': 'Somar o que sobra no fim de um período ao seguinte.',
  'help.guide.carry-over.step.1': 'Abra as Configurações.',
  'help.guide.carry-over.step.2': 'Ligue Acúmulo.',
  'help.guide.carry-over.result': 'O valor transferido é recalculado em todos os seus anos e mostrado abaixo do saldo.',
  'help.guide.carry-over.tip.1': 'Desligar zera todos os saldos transferidos.',
  // invite
  'help.guide.invite.title': 'Planejar junto com alguém',
  'help.guide.invite.goal':
    'Fundir seu plano com outro usuário do TREK para verem as folgas um do outro em uma só grade.',
  'help.guide.invite.step.1': 'Clique no ícone de pessoa no painel Pessoas.',
  'help.guide.invite.step.2': 'Escolha o usuário e envie o convite.',
  'help.guide.invite.step.3': 'A pessoa recebe uma notificação e aceita. Até lá o convite aparece como pendente.',
  'help.guide.invite.result':
    'Os dois planos se fundem: cada pessoa tem uma cor, vocês podem registrar dias um para o outro, e tudo sincroniza ao vivo.',
  'help.guide.invite.tip.1':
    'Para desfazer uma fusão, use Encerrar nas Configurações. As entradas de cada um voltam para o próprio plano.',
  'help.guide.invite.tip.2': 'Se a outra pessoa só precisa ver seus dias, compartilhe seu calendário em vez de fundir.',
  // share-calendar
  'help.guide.share-calendar.title': 'Compartilhar seu calendário somente leitura',
  'help.guide.share-calendar.goal': 'Deixar alguém ver quando você está de folga sem dar voz no seu plano.',
  'help.guide.share-calendar.step.1': 'Clique no ícone de compartilhar no painel Calendários compartilhados.',
  'help.guide.share-calendar.step.2': 'Escolha o usuário e clique em Compartilhar. Não precisa de aceite.',
  'help.guide.share-calendar.step.3':
    'Calendários compartilhados com você aparecem no mesmo painel; o olho esconde um, Parar de compartilhar revoga o seu.',
  'help.guide.share-calendar.result':
    'Suas folgas aparecem como um anel colorido na grade da outra pessoa. Nada do que você compartilha pode ser editado por lá.',
  'help.guide.share-calendar.tip.1':
    'Compartilhar e fundir são independentes: você pode estar fundido com uma pessoa e compartilhar com outras.',
  'help.guide.share-calendar.tip.2': 'Passe o mouse em um dia com anel para ver quem está de folga e por quanto tempo.',

  // ── Screen: atlas ─────────────────────────────────────────────────────────────────────
  'help.ctx.atlas.title': 'Atlas',
  'help.ctx.atlas.summary':
    'O Atlas é a sua pegada de viagem num mapa-múndi: cada país aonde uma viagem te levou está colorido, e os que você visitou antes do TREK você adiciona à mão. Aproxime o zoom para ver regiões, mantenha uma lista de desejos de lugares que ainda quer ver e leia seus números no painel de vidro embaixo.',
  'help.ctx.atlas.bullet.1':
    'O mapa: países visitados têm uma cor que é deles, países planejados têm contorno tracejado, países da lista de desejos têm hachura diagonal, todo o resto é cinza. Passe o mouse sobre um país para ver viagens, lugares e primeira e última visita.',
  'help.ctx.atlas.bullet.2':
    'Busca no topo: digite um país ou um lugar. Escolher um país voa até lá e abre a janela dele; escolher um lugar pousa na região dele para que você possa marcá-la.',
  'help.ctx.atlas.bullet.3':
    'Mostrar países planejados, no canto superior direito: revela os países das suas próximas viagens. A chave só aparece enquanto você tiver alguma.',
  'help.ctx.atlas.bullet.4':
    'Painel embaixo: a aba Estatísticas com países, viagens, lugares, cidades, dias, continentes e sua sequência; a aba Lista de desejos com o que ainda está por vir.',
  'help.ctx.atlas.bullet.5':
    'Regiões: a partir do nível de zoom 5 o mapa passa a estados e províncias, cada um clicável para marcar ou remover.',
  'help.ctx.atlas.bullet.6':
    'Dawarich: com o addon conectado, um painel à esquerda das estatísticas dá baixa em desejos e adiciona países dos seus registros, nunca sem a sua confirmação.',
  // mark-country
  'help.guide.mark-country.title': 'Marcar um país como visitado',
  'help.guide.mark-country.goal':
    'Adicione um país onde você esteve antes do TREK, para que o mapa e a sua contagem o incluam.',
  'help.guide.mark-country.step.1': 'Digite o país na caixa de busca no topo do mapa.',
  'help.guide.mark-country.step.2': 'Escolha-o na lista. O mapa voa até lá e abre uma janela para esse país.',
  'help.guide.mark-country.step.3': 'Escolha Marcar como visitado.',
  'help.guide.mark-country.result':
    'O país ganha a sua cor no mapa e Países conta um a mais. Essa cor é permanente: marcar mais países nunca embaralha o resto.',
  'help.guide.mark-country.tip.1':
    'Clicar num país cinza no mapa abre a mesma janela; a busca é o caminho seguro para países pequenos.',
  'help.guide.mark-country.tip.2':
    'Um país marcado à mão sempre conta como visitado, sejam quais forem as datas de qualquer viagem para lá.',
  // unmark-country
  'help.guide.unmark-country.title': 'Remover um país que você marcou',
  'help.guide.unmark-country.goal': 'Tire de novo do mapa um país marcado à mão.',
  'help.guide.unmark-country.step.1':
    'Busque o país e escolha-o, ou clique nele no mapa. Para um país que você mesmo marcou, a janela pergunta se deve removê-lo.',
  'help.guide.unmark-country.step.2': 'Confirme com Remover.',
  'help.guide.unmark-country.result': 'O país volta a ficar cinza e sai da sua contagem.',
  'help.guide.unmark-country.tip.1':
    'Só países marcados à mão podem ser removidos assim. Um país com viagens ou lugares fica enquanto eles existirem; Remover também está no cartão de detalhe dele no painel quando foi marcado à mão.',
  // country-details
  'help.guide.country-details.title': 'Ver o que você fez num país',
  'help.guide.country-details.goal': 'Abra um país visitado e pule para as viagens que te levaram até lá.',
  'help.guide.country-details.step.1': 'Busque um país que você visitou.',
  'help.guide.country-details.step.2':
    'Escolha-o. O mapa voa até lá e o painel embaixo ganha um cartão com a bandeira, lugares, viagens e um chip por viagem.',
  'help.guide.country-details.result': 'Clique num chip de viagem para abrir essa viagem no planejador.',
  'help.guide.country-details.tip.1':
    'Passar o mouse sobre o país no mapa mostra os mesmos números mais a primeira e a última visita.',
  // planned-countries
  'help.guide.planned-countries.title': 'Mostrar os países para onde você vai',
  'help.guide.planned-countries.goal':
    'Traga para o mapa os países das suas próximas viagens sem contá-los como visitados.',
  'help.guide.planned-countries.step.1':
    'Ative Mostrar países planejados, no canto superior direito. O número ao lado diz quantos estão esperando.',
  'help.guide.planned-countries.step.2':
    'Busque um país planejado e escolha-o: o painel diz Planejado e a dica no mapa mostra quando você vai.',
  'help.guide.planned-countries.result':
    'Países planejados aparecem com contorno tracejado, para nunca parecerem um lugar onde você já esteve. A chave lembra a sua escolha.',
  'help.guide.planned-countries.tip.1':
    'Um país conta como visitado assim que a viagem para lá começou; uma viagem em andamento também conta. Viagens sem datas ficam totalmente fora das estatísticas.',
  'help.guide.planned-countries.tip.2': 'A chave só existe enquanto você tiver viagens futuras.',
  // regions
  'help.guide.regions.title': 'Marcar uma região',
  'help.guide.regions.goal': 'Mais fino que países: marque os estados, províncias ou prefeituras onde você esteve.',
  'help.guide.regions.step.1':
    'Aproxime o zoom num país até as regiões dele aparecerem, a partir do nível 5. Buscar o país e escolhê-lo te leva perto o bastante.',
  'help.guide.regions.step.2':
    'Clique numa região. Ao passar o mouse aparece o nome; a janela mostra a região e o país dela.',
  'help.guide.regions.step.3': 'Escolha Marcar como visitado.',
  'help.guide.regions.result':
    'A região se preenche com a cor do país. Marcar uma região também conta o país como visitado se ainda não era.',
  'help.guide.regions.tip.1':
    'Clicar numa região visitada oferece Remover, tenha você a marcado ou um lugar a colocado lá.',
  'help.guide.regions.tip.2': 'Regiões onde você tem lugares reais são marcadas para você; ali não há nada a fazer.',
  // search-place
  'help.guide.search-place.title': 'Encontrar um lugar e marcar a região dele',
  'help.guide.search-place.goal': 'Marque a Baviera buscando Munique, sem saber em que região fica uma cidade.',
  'help.guide.search-place.step.1':
    'Digite uma cidade, um ponto turístico ou um endereço na caixa de busca. Os países vêm primeiro; os lugares correspondentes aparecem abaixo, sob Lugares.',
  'help.guide.search-place.step.2': 'Escolha o lugar. O mapa voa até lá e descobre em que região o ponto está.',
  'help.guide.search-place.step.3':
    'Escolha Marcar como visitado para essa região, ou Adicionar à lista de desejos se ela ainda está por vir.',
  'help.guide.search-place.result':
    'A região fica marcada, e com ela o país. Países sem dados de região no pacote de mapas recorrem ao próprio país.',
  'help.guide.search-place.tip.1':
    'Os lugares vêm da mesma busca usada em todo o TREK, então seguem o provedor que o seu admin configurou.',
  // bucket-country
  'help.guide.bucket-country.title': 'Colocar um país na lista de desejos',
  'help.guide.bucket-country.goal':
    'Mantenha uma lista de desejos de países direto no mapa, separada dos que você já visitou.',
  'help.guide.bucket-country.step.1': 'Busque o país e escolha-o, ou clique nele no mapa.',
  'help.guide.bucket-country.step.2': 'Escolha Adicionar à lista de desejos.',
  'help.guide.bucket-country.step.3':
    'Escolha mês e ano se já souber quando, e confirme com Adicionar à lista de desejos.',
  'help.guide.bucket-country.result':
    'O país é desenhado com hachura diagonal na cor que terá quando você chegar lá, e aparece na aba Lista de desejos do painel.',
  'help.guide.bucket-country.tip.1':
    'A mesma janela oferece Remover da lista de desejos assim que o país está na lista.',
  'help.guide.bucket-country.tip.2':
    'Uma entrada por data alvo: o mesmo país pode estar na lista para dois meses diferentes, mas não duas vezes para o mesmo.',
  // bucket-place
  'help.guide.bucket-place.title': 'Adicionar um lugar à lista de desejos',
  'help.guide.bucket-place.goal':
    'Guarde uma cidade, um ponto turístico ou um endereço com que você sonha, com coordenadas e data alvo.',
  'help.guide.bucket-place.step.1': 'Abra a aba Lista de desejos no painel embaixo.',
  'help.guide.bucket-place.step.2': 'Clique em Adicionar lugar.',
  'help.guide.bucket-place.step.3':
    'Digite o nome e pressione o botão de busca; escolha o resultado para que o lugar tenha coordenadas. Digitar só um nome e pular a busca também funciona.',
  'help.guide.bucket-place.step.4': 'Escolha mês e ano se quiser e clique em Adicionar.',
  'help.guide.bucket-place.result':
    'O lugar fica no topo da sua lista de desejos com a data alvo; o × ao lado o remove de novo.',
  'help.guide.bucket-place.tip.1':
    'Um desejo com coordenadas é o que o Dawarich pode dar baixa para você depois, quando seus registros mostrarem que você esteve lá.',
  // stats
  'help.guide.stats.title': 'Ler as suas estatísticas',
  'help.guide.stats.goal': 'Saber o que os números do painel contam, e o que não contam.',
  'help.guide.stats.step.1':
    'Países é o número de países distintos onde você realmente esteve; os planejados aparecem ao lado, não dentro. Viagens, Lugares e Dias são totais de todas as suas viagens. Cidades é deduzido dos endereços dos seus lugares, portanto é uma estimativa.',
  'help.guide.stats.step.2':
    'Os continentes mostram países visitados por continente; a Antártida entra na fila assim que você tiver estado lá. Depois a sua sequência, anos consecutivos com pelo menos uma viagem, e quantas viagens você fez este ano.',
  'help.guide.stats.result':
    'Os números acompanham as suas viagens conforme você as planeja; aqui nada precisa de manutenção.',
  'help.guide.stats.tip.1':
    'As cidades são lidas do texto do endereço, não consultadas, então um endereço curto como “Osteria Francescana, Italy” ou um que termina numa prefeitura pode dar uma região em vez de uma cidade.',
  'help.guide.stats.tip.2':
    'Países marcados à mão contam em Países e nos continentes, mas não trazem viagens, lugares nem dias.',

  // ── Screen: collections ───────────────────────────────────────────────────────────────
  'help.ctx.collections.title': 'Coleções',
  'help.ctx.collections.summary':
    'Collections é a sua biblioteca de lugares fora de qualquer viagem: listas com nome de lugares que você encontrou e quer guardar, cada lugar com um status Ideia, Quero ir ou Visitado. Os lugares são copiados para dentro e para fora das viagens, nunca vinculados, então uma lista e uma viagem nunca alteram uma à outra.',
  'help.ctx.collections.bullet.1':
    'Barra de listas à esquerda: suas próprias listas, as compartilhadas com você, convites esperando um sim, Todos os salvos como a união de tudo o que é seu, e Nova lista mais a importação de arquivo no topo.',
  'help.ctx.collections.bullet.2':
    'Cabeçalho da lista aberta: sua cor, capa, descrição e links, os membros, e as ações Editar, Exportar e Compartilhar à direita.',
  'help.ctx.collections.bullet.3':
    'Linha de filtros acima dos lugares: status, categoria, avaliação e ordenação, o filtro de rótulos, o + para adicionar um lugar, a importação de uma viagem e Escolher para ações em massa.',
  'help.ctx.collections.bullet.4':
    'Linhas de lugares: avatar, nome e endereço, rótulos e categoria, e a pílula de status à direita, que alterna com um clique.',
  'help.ctx.collections.bullet.5':
    'Mapa à direita: um pino por lugar com coordenadas, o alternador lista ou mapa, a caixa de busca e o filtro de rótulos. Clicar num pino abre esse lugar.',
  'help.ctx.collections.bullet.6':
    'Ficha de detalhes: clique numa linha para ver capa, categoria, rótulos, status, descrição e links, com Editar, Copiar para viagem e Remover da lista.',
  // create-list
  'help.guide.create-list.title': 'Criar uma lista',
  'help.guide.create-list.goal': 'Comece uma nova lista com nome, com uma cor e uma capa, pronta para receber lugares.',
  'help.guide.create-list.step.1': 'Clique em Nova lista no topo da barra de listas.',
  'help.guide.create-list.step.2':
    'Dê um nome à lista e escolha uma cor. Imagem de capa, descrição e links são opcionais; você pode adicioná-los depois com Editar.',
  'help.guide.create-list.step.3': 'Clique em Criar.',
  'help.guide.create-list.result':
    'A lista abre vazia, com Adicionar um lugar e Importar de uma viagem como as duas formas de preenchê-la.',
  'help.guide.create-list.tip.1':
    'A capa pode ser um upload seu ou uma imagem encontrada pela busca do Unsplash no mesmo diálogo.',
  // add-place
  'help.guide.add-place.title': 'Adicionar um lugar',
  'help.guide.add-place.goal':
    'Encontre um lugar e salve-o na lista aberta com nome, categoria, status e notas de uma vez.',
  'help.guide.add-place.step.1': 'Clique no + na linha de filtros acima dos lugares.',
  'help.guide.add-place.step.2':
    'Digite o lugar no campo de busca e escolha um resultado. Nome, endereço e coordenadas são preenchidos a partir dele.',
  'help.guide.add-place.step.3':
    'Defina o status e, se quiser, uma categoria, uma descrição e links, depois clique em Adicionar. O diálogo continua aberto para o próximo lugar; Cancelar o fecha.',
  'help.guide.add-place.result': 'O lugar aparece na lista e, quando tem coordenadas, como um pino no mapa.',
  'help.guide.add-place.tip.1':
    'De dentro de uma viagem, Salvar na Coleção no inspetor do lugar ou no menu do lugar coloca um lugar da viagem numa lista sem sair da viagem.',
  'help.guide.add-place.tip.2':
    'A lista precisa ser sua ou uma em que você é editor ou administrador; o + não está em Todos os salvos nem numa lista que você só visualiza.',
  // import-from-trip
  'help.guide.import-from-trip.title': 'Importar lugares de uma viagem',
  'help.guide.import-from-trip.goal':
    'Traga os lugares de uma viagem inteira para uma lista de uma vez, em vez de salvá-los um por um.',
  'help.guide.import-from-trip.step.1':
    'Clique no botão de importar com a seta de nuvem na linha de filtros. Numa lista vazia a mesma ação fica ao lado de Adicionar um lugar.',
  'help.guide.import-from-trip.step.2': 'Escolha uma das suas viagens.',
  'help.guide.import-from-trip.step.3':
    'Marque os lugares que quiser. Os que já estão na lista aparecem em cinza; os que nenhum dia da viagem contém começam selecionados. Apenas novos esconde o que você já tem.',
  'help.guide.import-from-trip.step.4':
    'Clique em Importar. O botão sempre diz quantos estão prestes a ser adicionados.',
  'help.guide.import-from-trip.result':
    'Os lugares são copiados para a lista com nome, endereço, coordenadas, descrição e categoria. A viagem fica como estava.',
  'help.guide.import-from-trip.tip.1':
    'Duplicatas por nome ou coordenadas são puladas automaticamente, então importar duas vezes não faz mal.',
  'help.guide.import-from-trip.tip.2':
    'Dentro da lista de lugares de uma viagem, o modo de seleção oferece em vez disso Salvar na Coleção para um conjunto de lugares escolhidos a dedo.',
  // place-status
  'help.guide.place-status.title': 'Definir o status de um lugar',
  'help.guide.place-status.goal': 'Acompanhe o que é ideia, o que está na lista curta e onde você já esteve.',
  'help.guide.place-status.step.1':
    'Clique na pílula de status na ponta direita de uma linha de lugar. Ideia vira Quero ir.',
  'help.guide.place-status.step.2': 'Clique de novo para Visitado, e mais uma vez para recomeçar em Ideia.',
  'help.guide.place-status.result':
    'A pílula e a cor dela mudam na hora; o filtro de status acima da lista acompanha a contagem.',
  'help.guide.place-status.tip.1': 'Status é coisa do Collections: copiar um lugar para uma viagem não o leva junto.',
  'help.guide.place-status.tip.2':
    'De uma viagem, Salvar na Coleção mostra uma pílula de status por lista em que o lugar está, e o painel de lugares tem a ação Marcar como visitado para uma seleção.',
  // place-detail
  'help.guide.place-detail.title': 'Abrir um lugar salvo',
  'help.guide.place-detail.goal': 'Veja tudo sobre um lugar e aja: editar, copiar para uma viagem, remover.',
  'help.guide.place-detail.step.1':
    'Clique numa linha de lugar. A ficha de detalhes abre ao lado da lista e o mapa se desloca até o lugar.',
  'help.guide.place-detail.step.2':
    'Embaixo ficam Editar, Copiar para viagem e Remover da lista; a câmera na capa troca a foto automática por uma sua.',
  'help.guide.place-detail.result':
    'Editar libera nome, categoria, rótulos, endereço, coordenadas, descrição e links direto na ficha.',
  'help.guide.place-detail.tip.1':
    'A capa é buscada automaticamente quando o lugar não tem imagem própria. Seu upload pode ser JPG, PNG, GIF ou WebP até 20 MB.',
  'help.guide.place-detail.tip.2':
    'Membros de uma lista compartilhada também podem deixar aqui uma avaliação em estrelas, e o filtro de avaliação na linha de filtros usa a média.',
  // labels
  'help.guide.labels.title': 'Agrupar lugares com rótulos',
  'help.guide.labels.goal': 'Dê a uma lista rótulos próprios, como bairros ou dias, além das categorias comuns.',
  'help.guide.labels.step.1': 'Abra o gerenciador de rótulos pelo controle de rótulos na linha de filtros.',
  'help.guide.labels.step.2':
    'Digite um nome, escolha uma cor e clique em Adicionar rótulo. Renomeie, recolora ou exclua rótulos existentes no mesmo diálogo.',
  'help.guide.labels.step.3':
    'Ative Escolher, marque os lugares e clique em Atribuir rótulo na barra de seleção. Um único lugar também recebe rótulos por Editar na ficha de detalhes dele.',
  'help.guide.labels.step.4':
    'Escolha um ou mais rótulos na linha de filtros para restringir a lista e o mapa aos lugares que carregam qualquer um deles.',
  'help.guide.labels.result':
    'Lugares rotulados mostram seus rótulos na linha; o filtro de rótulos está lá para todo membro, inclusive visualizadores.',
  'help.guide.labels.tip.1':
    'Rótulos pertencem à única lista em que foram criados. Mover um lugar para outra lista os descarta.',
  'help.guide.labels.tip.2': 'Gerenciar e atribuir rótulos exige direitos de edição na lista.',
  // filter-select
  'help.guide.filter-select.title': 'Filtrar e selecionar lugares',
  'help.guide.filter-select.goal': 'Restrinja a lista e aja sobre muitos lugares de uma vez.',
  'help.guide.filter-select.step.1':
    'Use os menus na linha de filtros: status, categoria, avaliação mínima e ordem. Cada um mostra quantos lugares deixaria.',
  'help.guide.filter-select.step.2':
    'Clique em Escolher. Cada linha ganha uma caixa de seleção e aparece uma barra de seleção.',
  'help.guide.filter-select.step.3':
    'Marque lugares ou use Selecionar tudo para tudo o que está filtrado no momento, depois escolha Atribuir rótulo, Mover para lista, Duplicar em lista, Copiar para viagem ou Excluir.',
  'help.guide.filter-select.result':
    'As ações valem para toda a seleção de uma vez. O × à direita sai do modo de seleção.',
  'help.guide.filter-select.tip.1':
    'Selecionar tudo segue o filtro, então filtrar por Quero ir e selecionar tudo é o jeito rápido de agir sobre a lista curta.',
  // copy-to-trip
  'help.guide.copy-to-trip.title': 'Copiar lugares para uma viagem',
  'help.guide.copy-to-trip.goal': 'Transforme lugares salvos em paradas de uma das suas viagens.',
  'help.guide.copy-to-trip.step.1':
    'Ative Escolher e marque os lugares, ou abra um lugar e use Copiar para viagem na ficha de detalhes dele.',
  'help.guide.copy-to-trip.step.2': 'Clique em Copiar para viagem na barra de seleção.',
  'help.guide.copy-to-trip.step.3': 'Escolha a viagem. A caixa de busca encurta uma lista longa.',
  'help.guide.copy-to-trip.result':
    'Os lugares caem na lista de lugares dessa viagem com nome, descrição, categoria, notas, preço, coordenadas, foto e tags. Nada muda na coleção.',
  'help.guide.copy-to-trip.tip.1':
    'Visualizadores de uma lista compartilhada também podem fazer isso; copia para fora da lista, não a altera.',
  // share-list
  'help.guide.share-list.title': 'Compartilhar uma lista com alguém',
  'help.guide.share-list.goal': 'Planeje uma lista junto com outras pessoas deste TREK, ao vivo.',
  'help.guide.share-list.step.1': 'Clique em Compartilhar no cabeçalho da sua lista.',
  'help.guide.share-list.step.2': 'Selecione o usuário e um papel: Visualizador, Editor ou Administrador.',
  'help.guide.share-list.step.3':
    'Clique em Enviar convite. A pessoa aparece como convite pendente até aceitar o convite na barra de listas dela.',
  'help.guide.share-list.result':
    'Depois de aceito, a lista aparece para ela em Compartilhada e toda alteração sincroniza ao vivo. Membros e seus papéis continuam editáveis no mesmo diálogo.',
  'help.guide.share-list.tip.1':
    'Visualizadores podem olhar, avaliar e copiar lugares para as próprias viagens. Editores adicionam e editam lugares e rótulos. Administradores também podem excluir.',
  'help.guide.share-list.tip.2':
    'Só o dono convida e remove pessoas; um membro pode sair de uma lista compartilhada por conta própria.',
  // export-list
  'help.guide.export-list.title': 'Exportar uma lista como arquivo',
  'help.guide.export-list.goal': 'Entregue uma lista a alguém em outro TREK, ou leve-a para um app de mapas.',
  'help.guide.export-list.step.1': 'Clique em Exportar no cabeçalho da lista.',
  'help.guide.export-list.step.2':
    'Escolha Lista do TREK para outro TREK, com rótulos e status, ou GPX para OsmAnd, Organic Maps, um Garmin e outros apps que leem waypoints.',
  'help.guide.export-list.result': 'O arquivo é baixado. Qualquer membro de uma lista compartilhada pode exportá-la.',
  'help.guide.export-list.tip.1':
    'Um lugar sem coordenadas não pode ser um waypoint GPX; ele fica de fora e o TREK diz quantos ficaram.',
  'help.guide.export-list.tip.2':
    'Avaliações, membros e fotos enviadas ficam para trás de propósito; pertencem a este TREK, não à lista.',
  // import-file
  'help.guide.import-file.title': 'Importar uma lista de um arquivo',
  'help.guide.import-file.goal':
    'Traga um arquivo de Lista do TREK ou um arquivo GPX, como nova lista ou para uma que você já tem.',
  'help.guide.import-file.step.1':
    'Clique no botão de importar com a seta de upload ao lado de Nova lista na barra de listas.',
  'help.guide.import-file.step.2':
    'Escolha o arquivo. O TREK mostra o que há nele antes de qualquer coisa acontecer: o nome, quantos lugares e rótulos.',
  'help.guide.import-file.step.3':
    'Mantenha Nova lista e mude o nome se quiser, ou escolha Adicionar a uma lista para colocar os lugares numa lista que você pode editar, depois clique em Importar.',
  'help.guide.import-file.result':
    'Você cai na lista com os lugares importados. Adicionar a uma lista apenas adiciona; lugares que já estavam lá mantêm status, notas e rótulos.',
  'help.guide.import-file.tip.1':
    'De um GPX, cada waypoint com nome vira um lugar; tracks são linhas e ficam de fora, e a prévia diz quantos pontos eram.',
  'help.guide.import-file.tip.2':
    'Um arquivo que não é nem Lista do TREK nem GPX é recusado com um motivo; um único lugar ilegível é pulado, não o arquivo inteiro.',
  // edit-list
  'help.guide.edit-list.title': 'Editar ou excluir uma lista',
  'help.guide.edit-list.goal': 'Mude o nome, a cor, a capa, a descrição ou os links de uma lista, ou remova a lista.',
  'help.guide.edit-list.step.1': 'Clique em Editar no cabeçalho da lista. Só o dono vê.',
  'help.guide.edit-list.step.2':
    'Mude o que quiser e clique em Salvar. Excluir lista, embaixo à esquerda, remove a lista com todos os seus lugares, após uma confirmação.',
  'help.guide.edit-list.result': 'O cabeçalho assume a nova cor, capa e descrição na hora.',
  'help.guide.edit-list.tip.1': 'Excluir uma lista não pode ser desfeito. Exporte-a antes se quiser guardar uma cópia.',
  // all-saved
  'help.guide.all-saved.title': 'Buscar em toda a sua biblioteca',
  'help.guide.all-saved.goal': 'Olhe de uma vez todas as listas que são suas.',
  'help.guide.all-saved.step.1':
    'Clique em Todos os salvos na barra de listas. Ele une os lugares de toda lista de que você é dono ou coproprietário.',
  'help.guide.all-saved.step.2':
    'Use a caixa de busca e os filtros como em qualquer lista; Escolher também funciona aqui para copiar para uma viagem.',
  'help.guide.all-saved.result':
    'Uma só visão sobre todos os seus lugares salvos, sem adicionar nem importar, já que não há uma lista única onde colocá-los.',
  'help.guide.all-saved.tip.1': 'Rótulos são por lista, então o filtro de rótulos não é oferecido em Todos os salvos.',

  // ── Screen: journey ───────────────────────────────────────────────────────────────────
  'help.ctx.journey.title': 'Jornada',
  'help.ctx.journey.summary':
    'Jornada é o seu diário de viagem com as fotos em primeiro lugar. Cada jornada está ligada a uma ou mais viagens e cresce dia a dia a partir de entradas com relato, fotos, humor e clima. Esta tela lista suas jornadas; abra uma para escrever.',
  'help.ctx.journey.bullet.1':
    'O banner no topo mostra a jornada em andamento, ou a mais recente, com suas contagens de entradas, fotos e lugares. Continuar escrevendo abre a jornada no dia de hoje.',
  'help.ctx.journey.bullet.2':
    'Abaixo, um cartão por jornada com capa, subtítulo, datas e contagens. Clique num cartão para abri-la.',
  'help.ctx.journey.bullet.3':
    'O último cartão da grade, Criar uma nova jornada, começa uma a partir das suas viagens.',
  // create-journey
  'help.guide.create-journey.title': 'Criar uma jornada',
  'help.guide.create-journey.goal':
    'Começar um diário para uma viagem, com os lugares da viagem já esperando como sugestões.',
  'help.guide.create-journey.step.1': 'Clique em Criar uma nova jornada, o último cartão da grade.',
  'help.guide.create-journey.step.2':
    'Dê um nome a ela e, se quiser, um subtítulo, depois marque as viagens às quais ela pertence. O contador diz quantos lugares vão entrar.',
  'help.guide.create-journey.step.3': 'Clique em Criar jornada.',
  'help.guide.create-journey.result':
    'O diário abre. Cada lugar das viagens vinculadas fica na linha do tempo como sugestão, uma por dia em que ele está, pronta para ser escrita.',
  'help.guide.create-journey.tip.1': 'Mais viagens podem ser vinculadas depois em Configurações da jornada.',
  'help.guide.create-journey.tip.2': 'Uma jornada sem viagens também funciona; você então adiciona as entradas à mão.',
  // open-journey
  'help.guide.open-journey.title': 'Abrir uma jornada',
  'help.guide.open-journey.goal': 'Entrar num diário, e saber onde ele abre.',
  'help.guide.open-journey.step.1':
    'Clique num cartão. Cada um mostra a capa, as datas e quantas entradas, fotos e lugares a jornada tem.',
  'help.guide.open-journey.result':
    'Uma jornada em andamento abre no dia de hoje, ou na última entrada antes de hoje quando ainda não há nada escrito; uma concluída abre no início.',
  'help.guide.open-journey.tip.1':
    'A capa é a primeira foto da jornada, a menos que você defina uma em Configurações da jornada.',
  // continue-writing
  'help.guide.continue-writing.title': 'Continuar a jornada em andamento',
  'help.guide.continue-writing.goal': 'Ir direto para a página de hoje da jornada em que você está.',
  'help.guide.continue-writing.step.1':
    'Clique em Continuar escrevendo no banner do topo. Ele mostra a jornada em andamento, ou a mais recente quando não há nenhuma.',
  'help.guide.continue-writing.result':
    'O diário abre no dia de hoje, ou na última entrada antes de hoje quando ainda não há nada escrito.',
  'help.guide.continue-writing.tip.1':
    'O banner também oferece uma sugestão para uma viagem que ainda não tem jornada; Dispensar esconde essa sugestão.',

  // ── Screen: journey-detail ────────────────────────────────────────────────────────────
  'help.ctx.journey-detail.title': 'Diário',
  'help.ctx.journey-detail.summary':
    'Uma jornada aberta: a linha do tempo à esquerda, dia a dia, e o mapa à direita com cada entrada e os lugares das viagens vinculadas. Tudo o que acrescenta ao diário fica no topo; o cabeçalho tem as contagens, Studio, a chave de sugestões e Configurações da jornada.',
  'help.ctx.journey-detail.bullet.1':
    'Cabeçalho: capa, título e subtítulo, as contagens de dias, lugares, entradas e fotos, e à direita Studio, a chave de sugestões e Configurações da jornada.',
  'help.ctx.journey-detail.bullet.2':
    'Barra de ferramentas: as abas Linha do tempo e Galeria, Buscar nesta viagem e Adicionar entrada.',
  'help.ctx.journey-detail.bullet.3':
    'Linha do tempo: uma seção por dia com um + para adicionar uma entrada naquele dia; cartões de entrada com fotos, humor, clima e relato; sugestões das viagens num estilo mais claro, com Descartar esta sugestão.',
  'help.ctx.journey-detail.bullet.4':
    'Mapa: as entradas como pinos, ligados em ordem de data por uma linha tracejada, os lugares das viagens e as trilhas GPX importadas nessas viagens.',
  'help.ctx.journey-detail.bullet.5':
    'Configurações da jornada: capa, nome e subtítulo, trilhas no mapa, campos do registro, sugestões descartadas, viagens vinculadas, colaboradores, compartilhamento público, arquivar e excluir.',
  'help.ctx.journey-detail.bullet.6':
    'Dois botões redondos flutuam sobre uma linha do tempo longa: voltar ao topo e pular para a última entrada.',
  // add-entry
  'help.guide.add-entry.title': 'Escrever uma entrada',
  'help.guide.add-entry.goal': 'Adicionar o relato de um dia com título, texto, humor e clima.',
  'help.guide.add-entry.step.1':
    'Clique em Adicionar entrada na barra de ferramentas, ou no + do cabeçalho de um dia para começar naquele dia.',
  'help.guide.add-entry.step.2':
    'Dê um nome ao momento e escreva o relato. A barra acima do texto adiciona negrito, itálico, títulos, citações, links e listas em Markdown.',
  'help.guide.add-entry.step.3':
    'Escolha um humor e o clima, confira a data e fixe uma localização se quiser: busque um lugar ou use sua posição atual.',
  'help.guide.add-entry.step.4': 'Clique em Salvar.',
  'help.guide.add-entry.result':
    'A entrada aparece no seu dia na linha do tempo e como pino no mapa. Suas contagens são atualizadas no cabeçalho.',
  'help.guide.add-entry.tip.1': 'Escrever numa sugestão é o mesmo editor, com o lugar já definido.',
  'help.guide.add-entry.tip.2':
    'As tags no rodapé são texto livre, joia escondida ou melhor refeição, e a busca as encontra.',
  // entry-photos
  'help.guide.entry-photos.title': 'Adicionar fotos e vídeos a uma entrada',
  'help.guide.entry-photos.goal': 'Colocar imagens num dia; a primeira vira a capa da entrada.',
  'help.guide.entry-photos.step.1': 'Abra o menu de uma entrada com o ⋯ no cartão dela e escolha Editar.',
  'help.guide.entry-photos.step.2':
    'Clique em Enviar fotos e escolha os arquivos. Da galeria pega imagens que já estão na galeria da jornada; External photos busca aquele dia numa biblioteca Immich ou Synology conectada.',
  'help.guide.entry-photos.step.3':
    'Passe o mouse sobre uma imagem para Tornar 1º e escolher a capa, depois clique em Salvar.',
  'help.guide.entry-photos.result': 'As fotos aparecem no cartão e na galeria; a primeira é a miniatura em todo lugar.',
  'help.guide.entry-photos.tip.1':
    'Vídeos entram numa entrada do mesmo jeito: mp4, m4v, webm ou mov até 500 MB, guardados como foram enviados.',
  'help.guide.entry-photos.tip.2':
    'Arquivos HEIC de um iPhone são convertidos para JPEG no envio, o que remove os metadados de GPS e da câmera.',
  // suggestions
  'help.guide.suggestions.title': 'Usar ou descartar as sugestões',
  'help.guide.suggestions.goal':
    'Transformar os lugares das suas viagens em entradas, e tirar do caminho aqueles sobre os quais você não vai escrever.',
  'help.guide.suggestions.step.1':
    'Uma sugestão é um cartão mais claro com o nome do lugar em itálico. Clique nele para abrir o editor com o lugar e o dia já definidos.',
  'help.guide.suggestions.step.2':
    'Clique em Descartar esta sugestão num cartão que você não vai usar. Ele sai da linha do tempo sem ser excluído, e a sincronização da viagem não o oferece de novo.',
  'help.guide.suggestions.step.3':
    'Mudou de ideia? Configurações da jornada mostra quantas estão descartadas, e Trazer de volta as sugestões descartadas devolve todas.',
  'help.guide.suggestions.result':
    'A linha do tempo contém só o que você pretende escrever; a chave no cabeçalho esconde todas as sugestões de uma vez enquanto você lê.',
  'help.guide.suggestions.tip.1': 'Um lugar mantido por dois dias gera uma sugestão em cada um deles.',
  'help.guide.suggestions.tip.2': 'Sugestões nunca contam nas estatísticas; só entradas escritas contam.',
  // add-on-day
  'help.guide.add-on-day.title': 'Adicionar uma entrada num dia anterior',
  'help.guide.add-on-day.goal': 'Escrever sobre um dia que já passou sem corrigir a data depois.',
  'help.guide.add-on-day.step.1': 'Clique no + do cabeçalho daquele dia.',
  'help.guide.add-on-day.step.2': 'O editor abre com aquela data definida. Escreva e Salvar como sempre.',
  'help.guide.add-on-day.result': 'A entrada cai direto no dia certo.',
  'help.guide.add-on-day.tip.1': 'Dentro de um dia, as setas no menu de uma entrada a movem para antes ou para depois.',
  // pros-cons
  'help.guide.pros-cons.title': 'Adicionar um veredito',
  'help.guide.pros-cons.goal': 'Resumir um dia com o que foi ótimo e o que não foi.',
  'help.guide.pros-cons.step.1':
    'No editor, encontre Prós e contras abaixo do relato. Digite um ponto em Prós ou Contras e use Adicionar outro para o próximo.',
  'help.guide.pros-cons.step.2': 'Salvar. O veredito aparece no cartão como duas listas curtas.',
  'help.guide.pros-cons.result': 'Joinha para cima e joinha para baixo num relance, abaixo do relato.',
  'help.guide.pros-cons.tip.1':
    'Uma jornada que não usa vereditos pode desligar a seção em Campos do registro, em Configurações da jornada.',
  // search-journey
  'help.guide.search-journey.title': 'Encontrar algo num diário longo',
  'help.guide.search-journey.goal': 'Chegar à entrada que você quer sem rolar por semanas.',
  'help.guide.search-journey.step.1':
    'Digite em Buscar nesta viagem na barra de ferramentas. A linha do tempo filtra enquanto você digita, em títulos, relatos, lugares e tags. Acentos e maiúsculas não importam.',
  'help.guide.search-journey.step.2':
    'A chave de sugestões no cabeçalho esconde os cartões não escritos enquanto você lê. Quando a linha do tempo fica longa, dois botões redondos flutuam acima da borda inferior: voltar ao topo e pular para a última entrada.',
  'help.guide.search-journey.result': 'Só as entradas correspondentes ficam; limpe a caixa para ver tudo de novo.',
  'help.guide.search-journey.tip.1':
    'Uma jornada em andamento abre no dia de hoje, então a página atual geralmente já está à vista.',
  'help.guide.search-journey.tip.2': 'Tags também contam: buscar joia escondida encontra toda entrada com essa tag.',
  // gallery-map
  'help.guide.gallery-map.title': 'Navegar pela galeria e pelo mapa',
  'help.guide.gallery-map.goal': 'Ver a jornada inteira como imagens, e como lugares no mapa.',
  'help.guide.gallery-map.step.1':
    'Mude para Galeria na barra de ferramentas: cada foto de cada entrada, mais as imagens enviadas diretamente para a galeria. Clique numa delas para o lightbox.',
  'help.guide.gallery-map.step.2':
    'O mapa à direita mostra as entradas como pinos em ordem de data, os lugares das viagens vinculadas e qualquer trilha GPX importada nessas viagens, na cor que ela tem no planejador.',
  'help.guide.gallery-map.result':
    'Passe o mouse sobre uma trilha para ver o nome. A linha tracejada entre as entradas é desenhada pelo TREK; uma trilha é a rota que você realmente gravou.',
  'help.guide.gallery-map.tip.1': 'As trilhas podem ser desligadas para uma jornada em Configurações da jornada.',
  'help.guide.gallery-map.tip.2':
    'Fotos da galeria com localização aparecem também no mapa público, quando Galeria e Mapa estão ambos compartilhados.',
  // entry-fields
  'help.guide.entry-fields.title': 'Desligar campos do registro',
  'help.guide.entry-fields.goal': 'Limitar o editor ao que esta jornada usa.',
  'help.guide.entry-fields.step.1': 'Abra Configurações da jornada pelo cabeçalho.',
  'help.guide.entry-fields.step.2': 'Em Campos do registro, desligue Humor, Clima ou Prós e contras.',
  'help.guide.entry-fields.result':
    'O editor para de pedir esses campos. Nada do que foi escrito se perde: religar um campo traz os valores guardados de volta à vista, e uma jornada compartilhada esconde os mesmos campos.',
  'help.guide.entry-fields.tip.1':
    'As chaves são por jornada, então uma viagem de trabalho e umas férias podem ser diferentes.',
  // link-trip
  'help.guide.link-trip.title': 'Vincular outra viagem',
  'help.guide.link-trip.goal': 'Trazer os lugares de uma segunda viagem para o diário como sugestões.',
  'help.guide.link-trip.step.1': 'Abra Configurações da jornada pelo cabeçalho.',
  'help.guide.link-trip.step.2': 'Abaixo das viagens vinculadas, clique em Adicionar viagem.',
  'help.guide.link-trip.step.3': 'Escolha a viagem.',
  'help.guide.link-trip.result':
    'Os lugares dela chegam à linha do tempo como sugestões nos seus dias, e as trilhas GPX dela entram no mapa.',
  'help.guide.link-trip.tip.1':
    'O × ao lado de uma viagem vinculada desfaz o vínculo; as entradas que você escreveu ficam.',
  'help.guide.link-trip.tip.2': 'Entradas de um dia contam só uma vez, por mais viagens que cubram aquele dia.',
  // share-public
  'help.guide.share-public.title': 'Compartilhar a jornada publicamente',
  'help.guide.share-public.goal': 'Dar a pessoas sem conta no TREK um link somente leitura.',
  'help.guide.share-public.step.1': 'Abra Configurações da jornada e encontre Compartilhamento público.',
  'help.guide.share-public.step.2': 'Clique em Criar link de compartilhamento.',
  'help.guide.share-public.step.3':
    'Escolha o que os visitantes veem: Linha do tempo, Galeria e Mapa são chaves separadas. Copiar coloca o link na sua área de transferência.',
  'help.guide.share-public.result':
    'Quem tiver o link vê as seções ativadas e nada mais; campos que você desligou em Campos do registro ficam escondidos ali também.',
  'help.guide.share-public.tip.1':
    'As fotos aparecem no mapa público só quando Galeria e Mapa estão ambos ligados; com Mapa desligado, as coordenadas delas são removidas antes de saírem do servidor.',
  'help.guide.share-public.tip.2': 'Exclua o link no mesmo lugar para encerrar o compartilhamento.',
  // contributors
  'help.guide.contributors.title': 'Escrever juntos',
  'help.guide.contributors.goal': 'Deixar um companheiro de viagem adicionar as próprias entradas e fotos.',
  'help.guide.contributors.step.1': 'Abra Configurações da jornada e role até os colaboradores.',
  'help.guide.contributors.step.2': 'Clique em Convidar colaborador e busque o usuário por nome ou e-mail.',
  'help.guide.contributors.step.3': 'Escolha um papel e confirme.',
  'help.guide.contributors.result':
    'A jornada aparece na lista dele e as entradas dele levam o nome dele. Remova um colaborador com o × ao lado.',
  'help.guide.contributors.tip.1':
    'Colaboradores são para pessoas neste TREK. Para todos os outros existe o link público.',
  // studio
  'help.guide.studio.title': 'Diagramar a jornada como um álbum de fotos',
  'help.guide.studio.goal': 'Transformar o diário em páginas para impressão.',
  'help.guide.studio.step.1': 'Clique em Studio no cabeçalho. O designer abre por cima da jornada.',
  'help.guide.studio.step.2':
    'O nome da jornada à esquerda da barra superior é o caminho de volta; ele deixa você onde estava.',
  'help.guide.studio.result':
    'A faixa de páginas à esquerda, a página dupla na bancada, as propriedades à direita. Auto layout monta o álbum a partir das suas entradas; Export gera um PDF pronto para impressão.',
  'help.guide.studio.tip.1':
    'O Studio precisa de uma janela com pelo menos 1024 px de largura e não é oferecido no celular.',
  'help.guide.studio.tip.2':
    'O álbum herda o acesso da jornada: quem pode ler a jornada pode abri-lo, quem pode editar pode salvar.',
  // archive-journey
  'help.guide.archive-journey.title': 'Arquivar ou excluir uma jornada',
  'help.guide.archive-journey.goal': 'Encerrar uma jornada concluída, ou remover uma de vez.',
  'help.guide.archive-journey.step.1': 'Abra Configurações da jornada.',
  'help.guide.archive-journey.step.2':
    'Lá embaixo, Arquivar Jornada a encerra e a marca como arquivada; Restaurar Jornada a traz de volta. Excluir a remove com todas as entradas e fotos, após uma confirmação.',
  'help.guide.archive-journey.result':
    'Uma jornada arquivada continua legível e compartilhável; ela só não abre mais no dia de hoje.',
  'help.guide.archive-journey.tip.1':
    'Excluir não pode ser desfeito, e não mexe nas viagens às quais a jornada estava vinculada.',
  'help.guide.archive-journey.tip.2': 'Capa, nome e subtítulo ficam no mesmo diálogo, no topo.',

  // ── Screen: journey-studio ────────────────────────────────────────────────────────────
  'help.ctx.journey-studio.title': 'Studio',
  'help.ctx.journey-studio.summary':
    'O TREK Studio diagrama uma jornada como um livro de fotos para impressão. Ele abre por cima do diário: a lista de páginas e o conteúdo à esquerda, a página dupla em que você está trabalhando no centro, as propriedades dela à direita. Auto layout monta um primeiro rascunho a partir das suas entradas; tudo depois disso é seu para mover, recortar e restilizar, com desfazer para cada passo.',
  'help.ctx.journey-studio.bullet.1':
    'Barra superior: Back to the journey, Book view, Undo e Redo, Page format, Auto layout e Export. A marca Salvo ao lado do título diz quando o livro está armazenado.',
  'help.ctx.journey-studio.bullet.2':
    'Coluna à esquerda com cinco seções: Pages, Content (as fotos e entradas da jornada), Elements (texto, formas, linhas, grades, molduras, ícones), Viagem (mapas, países, bandeiras e marcadores montados a partir da jornada) e Layouts.',
  'help.ctx.journey-studio.bullet.3':
    'Bancada: a página dupla atual com sangria e margens de segurança, a barra de zoom embaixo, Fit to view e Baixar esta página dupla à direita.',
  'help.ctx.journey-studio.bullet.4':
    'Properties à direita: posição e tamanho, recorte e ponto focal, preencher ou ajustar, look, cantos, moldura, ordem de empilhamento e bloqueio do que estiver selecionado; números de página e o documento quando nada estiver.',
  'help.ctx.journey-studio.bullet.5':
    'O livro tem a forma de um encadernado: capa, uma primeira página avulsa, as páginas duplas, uma última página avulsa e a contracapa. Os números de página contam a partir da primeira página e são impressos como aparecem.',
  'help.ctx.journey-studio.bullet.6':
    'Várias pessoas podem projetar ao mesmo tempo: cada uma vê os ponteiros das outras com seus nomes, e salvar sobre uma versão que outra pessoa alterou volta como um conflito em vez de sobrescrever o trabalho dela.',
  // studio-auto-layout
  'help.guide.studio-auto-layout.title': 'Montar o livro automaticamente',
  'help.guide.studio-auto-layout.goal':
    'Consiga com um clique um primeiro rascunho completo a partir das entradas e fotos do diário.',
  'help.guide.studio-auto-layout.step.1': 'Clique em Auto layout na barra superior.',
  'help.guide.studio-auto-layout.step.2':
    'Escolha O livro inteiro: ele substitui todas as páginas, mantendo seu título e a configuração de página. Esta página refaz só a que está na tela, e é oferecida numa página dupla que veio de uma entrada.',
  'help.guide.studio-auto-layout.step.3':
    'Percorra a lista de páginas. Undo desfaz o layout inteiro se você preferia o que tinha.',
  'help.guide.studio-auto-layout.result':
    'Uma página dupla por entrada, em ordem, com fotos, título e história posicionados para você. Cada elemento continua seguindo sua entrada até você editá-lo.',
  'help.guide.studio-auto-layout.tip.1': 'As duas opções são passos normais de desfazer, então experimente à vontade.',
  'help.guide.studio-auto-layout.tip.2':
    'Um elemento que o Auto layout vinculou a uma entrada acompanha as edições dessa entrada até você mexer nele em Properties; isso rompe o vínculo.',
  // studio-pages
  'help.guide.studio-pages.title': 'Adicionar, mover e remover páginas duplas',
  'help.guide.studio-pages.goal': 'Dê forma ao livro página por página.',
  'help.guide.studio-pages.step.1':
    'Abra Pages na coluna. As miniaturas são o livro em ordem: capa, primeira página, páginas duplas, última página, contracapa.',
  'help.guide.studio-pages.step.2':
    'Adicionar página, embaixo, coloca uma nova antes da última página; o + entre duas miniaturas insere uma bem ali.',
  'help.guide.studio-pages.step.3':
    'Passe o mouse sobre uma miniatura para ver as ações: Mover para antes, Mover para depois, Duplicar página e Excluir página. Clique numa miniatura para abrir essa página dupla na bancada.',
  'help.guide.studio-pages.result':
    'A capa, a primeira e a última página e a contracapa ficam onde estão; páginas duplas novas sempre caem entre elas.',
  'help.guide.studio-pages.tip.1':
    'Book view na barra superior mostra o livro inteiro em folhas, do jeito que será encadernado.',
  'help.guide.studio-pages.tip.2':
    'Os números de página são ligados em Documento, em Properties, sem nada selecionado.',
  // studio-layouts
  'help.guide.studio-layouts.title': 'Aplicar um layout a uma página dupla',
  'help.guide.studio-layouts.goal': 'Dê a uma página dupla um arranjo pronto de molduras de foto e texto.',
  'help.guide.studio-layouts.step.1':
    'Abra Layouts na coluna. Treze layouts de página dupla e um conjunto à parte para a capa, a contracapa e as páginas avulsas.',
  'help.guide.studio-layouts.step.2':
    'Clique em um. A página dupla na bancada assume as molduras dele; fotos e texto que você já tinha são despejados nelas.',
  'help.guide.studio-layouts.result':
    'Molduras vazias esperam conteúdo: arraste uma foto de Content para uma delas, ou use Add to this page.',
  'help.guide.studio-layouts.tip.1': 'Um layout é um passo de desfazer como qualquer outro.',
  // studio-content
  'help.guide.studio-content.title': 'Colocar fotos e entradas numa página',
  'help.guide.studio-content.goal': 'Traga o material da própria jornada para a página dupla.',
  'help.guide.studio-content.step.1':
    'Abra Content na coluna. Photos lista cada imagem da jornada; Entries lista as entradas com seu texto.',
  'help.guide.studio-content.step.2':
    'Arraste uma foto para a página dupla, ou para uma moldura vazia, ou clique em Add to this page abaixo dela. Enviar fotos adiciona imagens que ainda não estão na jornada.',
  'help.guide.studio-content.step.3':
    'Sob uma entrada, Title, Story e Place colocam esse texto na página como elemento de texto; Data e as coordenadas vêm como marcadores, e as fotos da entrada ficam listadas ali mesmo.',
  'help.guide.studio-content.result':
    'Uma foto solta vira um elemento de foto; o texto continua seguindo a entrada até você editá-lo.',
  'help.guide.studio-content.tip.1': 'A caixa de busca no topo de Content filtra as duas listas.',
  'help.guide.studio-content.tip.2':
    'Soltar um arquivo da sua área de trabalho na bancada envia e posiciona de uma vez.',
  // studio-elements
  'help.guide.studio-elements.title': 'Adicionar texto, formas e ícones',
  'help.guide.studio-elements.goal': 'Decore uma página dupla além de fotos e histórias.',
  'help.guide.studio-elements.step.1': 'Abra Elements na coluna.',
  'help.guide.studio-elements.step.2':
    'Clique num estilo de texto para um título ou uma legenda, uma forma, uma linha, uma grade, uma moldura vazia com um estilo de moldura, ou um ícone da biblioteca pesquisável. Cada um cai no centro da página dupla, pronto para mover.',
  'help.guide.studio-elements.result':
    'Dê um clique duplo num elemento de texto para digitar nele; Properties guarda fonte, peso, tamanho, espaçamento e alinhamento.',
  'help.guide.studio-elements.tip.1': 'Molduras são espaços de foto vazios: solte uma imagem nelas depois.',
  // studio-travel
  'help.guide.studio-travel.title': 'Adicionar um mapa, bandeiras e números',
  'help.guide.studio-travel.goal': 'Transforme a própria jornada em números na página.',
  'help.guide.studio-travel.step.1': 'Abra Viagem na coluna.',
  'help.guide.studio-travel.step.2':
    'Escolha o que adicionar: um mapa do trajeto das entradas, contornos de países, uma lista ou grade de países, bandeiras, um marcador de data, dia ou distância, ou um resumo da viagem inteira. Cada um é montado a partir dos dados da jornada e se atualiza com eles.',
  'help.guide.studio-travel.result':
    'O elemento aparece na página dupla; Properties ajusta o estilo dele, e no mapa a área.',
  'help.guide.studio-travel.tip.1':
    'Marcadores seguem a entrada de onde a página dupla veio, então um marcador de data numa página dupla diagramada automaticamente já mostra aquele dia.',
  // studio-properties
  'help.guide.studio-properties.title': 'Editar o que você selecionou',
  'help.guide.studio-properties.goal': 'Mova, recorte, estilize e empilhe um elemento com o inspetor.',
  'help.guide.studio-properties.step.1':
    'Clique num elemento na página dupla. Aparecem alças para tamanho e rotação; arraste-o para mover.',
  'help.guide.studio-properties.step.2':
    'Properties à direita acompanha a seleção: posição e tamanho, Crop com o ponto focal que decide o que fica na moldura, Fill ou Fit, os filtros de Look, o raio em Corner, o estilo em Moldura, a ordem de empilhamento e Lock.',
  'help.guide.studio-properties.step.3':
    'Duplicar e Delete ficam no topo do inspetor; Undo na barra superior reverte qualquer um deles.',
  'help.guide.studio-properties.result':
    'Um elemento bloqueado não pode mais ser agarrado na página, o que mantém um layout pronto a salvo enquanto você trabalha ao redor.',
  'help.guide.studio-properties.tip.1': 'Shift+clique seleciona vários elementos; o inspetor então edita todos juntos.',
  'help.guide.studio-properties.tip.2':
    'Editar um elemento que o Auto layout posicionou rompe o vínculo dele com a entrada; ele para de seguir mudanças posteriores nessa entrada.',
  // studio-format
  'help.guide.studio-format.title': 'Escolher o formato de página',
  'help.guide.studio-format.goal': 'Defina o tamanho em que o livro será impresso, antes que o layout dependa dele.',
  'help.guide.studio-format.step.1': 'Clique em Page format na barra superior.',
  'help.guide.studio-format.step.2':
    'Escolha Square 21 × 21 cm, Square 30 × 30 cm, A4 ou A5 landscape ou portrait, ou informe largura e altura próprias em milímetros. Sangria e Segurança ficam logo abaixo.',
  'help.guide.studio-format.result':
    'Cada página dupla é desenhada nesse tamanho, com 3 mm de sangria e 5 mm de margem de segurança por padrão.',
  'help.guide.studio-format.tip.1':
    'Mude o formato primeiro, depois rode o Auto layout; o layout é montado para o tamanho que ele encontra.',
  'help.guide.studio-format.tip.2': 'Pergunte à sua gráfica os valores de sangria e segurança dela e informe esses.',
  // studio-export
  'help.guide.studio-export.title': 'Exportar o livro como PDF',
  'help.guide.studio-export.goal': 'Consiga um arquivo pronto para impressão, ou um para ler na tela.',
  'help.guide.studio-export.step.1': 'Clique em Export na barra superior.',
  'help.guide.studio-export.step.2':
    'Escolha Páginas avulsas, uma página por folha em ordem de leitura, que é o que uma gráfica quer, ou Páginas duplas, duas páginas por vez do jeito que o livro abre. Marcas de corte acrescenta a sangria em cada borda e marca onde cortar.',
  'help.guide.studio-export.step.3':
    'Clique em Visualizar impressão. Seu navegador abre as páginas e Salvar como PDF as transforma no arquivo.',
  'help.guide.studio-export.result':
    'Um PDF com tantas folhas quanto o diálogo anunciou, no formato de página que você definiu.',
  'help.guide.studio-export.tip.1': 'Gerar o PDF é só no desktop, como o próprio Studio.',
  'help.guide.studio-export.tip.2':
    'Para uma prova, exporte Páginas duplas sem marcas de corte; para a gráfica, Páginas avulsas com elas.',
  // studio-spread-file
  'help.guide.studio-spread-file.title': 'Reutilizar uma página dupla em outro livro',
  'help.guide.studio-spread-file.goal': 'Leve um design de que você gosta do livro de uma jornada para outro.',
  'help.guide.studio-spread-file.step.1':
    'Com a página dupla na bancada, clique em Baixar esta página dupla na ponta direita da barra de zoom. O arquivo guarda o design, não as fotografias.',
  'help.guide.studio-spread-file.step.2':
    'No outro livro, abra Pages e clique em Importar ao lado de Adicionar página, depois escolha o arquivo.',
  'help.guide.studio-spread-file.result':
    'A página dupla chega com suas molduras e estilos de texto; solte as fotos da nova jornada nas molduras.',
  'help.guide.studio-spread-file.tip.1': 'Um arquivo que não é um design de página dupla é recusado com um motivo.',

  // ── Screen: settings (all tabs) ───────────────────────────────────────────────────────
  'help.ctx.settings.title': 'Configurações',
  'help.ctx.settings.summary':
    'Suas configurações pessoais, uma aba por assunto na barra lateral à esquerda. A maioria das chaves vale no momento em que você as vira; um formulário com um botão Salvar embaixo espera por ele. Nada aqui muda o TREK de mais ninguém.',
  'help.ctx.settings.bullet.1':
    'Barra lateral à esquerda: Exibição, Appearance, Mapa, Notificações, Integrações, Offline e Conta. Plugins aparece assim que um estiver instalado, Sobre em um TREK auto-hospedado.',
  'help.ctx.settings.bullet.2':
    'Exibição é idioma, unidades, moeda e com o que o app abre; Appearance é tema, cores, tamanho do texto e os widgets do painel.',
  'help.ctx.settings.bullet.3':
    'Mapa escolhe o renderizador e seu estilo; Notificações os canais que chegam até você; Integrações bibliotecas de fotos, chaves de API e MCP; Offline o que o app guarda neste dispositivo.',
  'help.ctx.settings.bullet.4':
    'Conta guarda seu perfil, senha, autenticação em duas etapas, passkeys e a exclusão da sua conta.',
  'help.ctx.settings-display.title': 'Exibição',
  'help.ctx.settings-display.summary':
    'Idioma, unidades e moeda, como o mapa e as reservas se comportam, e com o que o TREK abre. Cada mudança aqui vale na hora.',
  'help.ctx.settings-display.bullet.1':
    'Language & region: o idioma da interface, o formato de hora, a moeda de exibição, e as unidades de distância e temperatura.',
  'help.ctx.settings-display.bullet.2':
    'Travel & map: rotas de reserva sempre no mapa, a pílula Explorar lugares, otimização de rota a partir da sua hospedagem, códigos de reserva ocultos e rotas de reserva com rótulo.',
  'help.ctx.settings-display.bullet.3':
    'Inicialização: se o TREK abre no painel ou na viagem ativa, e qual aba de uma viagem aparece primeiro.',
  'help.ctx.settings-appearance.title': 'Appearance',
  'help.ctx.settings-appearance.summary':
    'Como o TREK aparece nesta conta: claro ou escuro, a cor de destaque, vidro e movimento, tamanho do texto, e quais widgets o painel mostra. Tudo vale ao vivo, em cada dispositivo em que você entra.',
  'help.ctx.settings-appearance.bullet.1':
    'Theme: Claro, Escuro ou Automático, e o Color scheme com um Custom accent só seu.',
  'help.ctx.settings-appearance.bullet.2':
    'Readability: Transparency, Reduce motion, Density e Text size, com tamanhos avançados por nível.',
  'help.ctx.settings-appearance.bullet.3':
    'Dashboard widgets: uma chave por widget, separadamente para Desktop e Mobile.',
  'help.ctx.settings-appearance.bullet.4': 'Reset to defaults embaixo põe tudo de volta no lugar.',
  'help.ctx.settings-map.title': 'Mapa',
  'help.ctx.settings-map.summary':
    'Qual motor desenha os mapas e em que estilo. Leaflet é o mapa raster clássico, MapLibre desenha blocos vetoriais sem nenhum token, Mapbox adiciona prédios 3D e terreno com o seu próprio token.',
  'help.ctx.settings-map.bullet.1':
    'Provedor de mapa: Leaflet, MapLibre ou Mapbox, cada um com uma linha sobre o que precisa.',
  'help.ctx.settings-map.bullet.2':
    'Estilo do mapa e Modelo de mapa: o visual dos blocos, mais o token ou a chave que um provedor pede.',
  'help.ctx.settings-map.bullet.3':
    'Modo alta qualidade para antialiasing e a projeção de globo; Salvar mapa grava a escolha.',
  'help.ctx.settings-notifications.title': 'Notificações',
  'help.ctx.settings-notifications.summary':
    'Onde o TREK alcança você fora do app: um tópico ntfy, um webhook ou um canal que um plugin fornece. Abaixo dos canais, uma linha por evento decide o que vai para onde.',
  'help.ctx.settings-notifications.bullet.1':
    'ntfy: o tópico, um servidor próprio opcional e um token de acesso opcional, com Testar para enviar um na hora.',
  'help.ctx.settings-notifications.bullet.2': 'Webhook: uma URL que recebe cada evento como JSON, com Testar.',
  'help.ctx.settings-notifications.bullet.3':
    'As linhas de preferências: por evento, qual canal está ligado. Canais de plugin mostram Configurar até serem configurados.',
  'help.ctx.settings-integrations.title': 'Integrações',
  'help.ctx.settings-integrations.summary':
    'Tudo que se conecta ao TREK de fora: bibliotecas de fotos para a jornada, chaves de API para scripts, e o endpoint MCP com seus tokens e clientes OAuth para assistentes de IA.',
  'help.ctx.settings-integrations.bullet.1':
    'Provedores de fotos: Immich e Synology Photos, cada um com sua URL e chave, Testar conexão e Salvar.',
  'help.ctx.settings-integrations.bullet.2':
    'Chaves de API: chaves pessoais para scripts e outras ferramentas que chamam a API do TREK em seu nome.',
  'help.ctx.settings-integrations.bullet.3':
    'Configuração MCP: o endpoint, uma configuração de cliente pronta para copiar, e os tokens de API.',
  'help.ctx.settings-integrations.bullet.4':
    'Clientes OAuth 2.1: apps que fazem login pelo TREK, com URIs de redirecionamento, escopos permitidos, clientes de máquina e as sessões ativas.',
  'help.ctx.settings-offline.title': 'Offline',
  'help.ctx.settings-offline.summary':
    'O que o TREK guarda neste dispositivo para uma viagem ainda abrir sem conexão, e o que acontece quando uma mudança feita offline colide com uma feita em outro lugar.',
  'help.ctx.settings-offline.bullet.1':
    'Modo offline: Forçar modo offline faz o app se comportar como se a rede tivesse sumido, para testar ou numa conexão com franquia.',
  'help.ctx.settings-offline.bullet.2':
    'Preparar para uso offline: Baixar para uso offline busca agora suas viagens e os blocos de mapa delas.',
  'help.ctx.settings-offline.bullet.3':
    'O que armazenar offline: blocos do mapa ligados ou não, e uma chave por viagem.',
  'help.ctx.settings-offline.bullet.4':
    'Conflitos de sincronização e Cache offline: a estratégia para colisões, a contagem de mudanças pendentes e com falha, Sincronizar agora e Limpar cache.',
  'help.ctx.settings-account.title': 'Conta',
  'help.ctx.settings-account.summary':
    'Quem você é neste TREK e como entra: perfil e avatar, senha, autenticação em duas etapas, passkeys, e lá embaixo a exclusão da conta.',
  'help.ctx.settings-account.bullet.1': 'Perfil: nome de usuário, e-mail e avatar, salvos com Salvar perfil.',
  'help.ctx.settings-account.bullet.2': 'Alterar senha: senha atual, senha nova duas vezes, Atualizar senha.',
  'help.ctx.settings-account.bullet.3':
    'Autenticação em duas etapas (2FA) com um app autenticador e códigos de backup; Passkeys para entrar sem senha.',
  'help.ctx.settings-account.bullet.4':
    'Excluir conta embaixo, atrás de uma confirmação. O último admin não pode excluir a si mesmo.',
  // language-region
  'help.guide.language-region.title': 'Definir idioma, unidades e moeda',
  'help.guide.language-region.goal': 'Faça o TREK falar sua língua e contar do seu jeito.',
  'help.guide.language-region.step.1':
    'Escolha o idioma da interface em Language & region. O TREK muda na hora, em cada dispositivo em que você entra.',
  'help.guide.language-region.step.2':
    'Abaixo, escolha o formato de hora, a moeda de exibição, e as unidades de distância e temperatura.',
  'help.guide.language-region.result':
    'Datas, distâncias e dinheiro aparecem do jeito que você espera; a moeda própria de uma viagem continua ao lado dos valores convertidos.',
  'help.guide.language-region.tip.1':
    'A moeda de exibição é para totais entre viagens; cada viagem mantém a moeda que você deu a ela.',
  'help.guide.language-region.tip.2': 'O idioma também define os nomes de dias e meses no Vacay e na jornada.',
  // travel-map-prefs
  'help.guide.travel-map-prefs.title': 'Ajustar como o mapa e as reservas se comportam',
  'help.guide.travel-map-prefs.goal': 'Decida o que o mapa da viagem mostra por padrão.',
  'help.guide.travel-map-prefs.step.1':
    'Em Travel & map, Sempre mostrar rotas de reserva mantém voos e trens no mapa mesmo quando o dia deles não está aberto; Explorar lugares no mapa mostra a pílula para encontrar lugares; Otimizar rota a partir da hospedagem começa a rota onde você dorme.',
  'help.guide.travel-map-prefs.step.2':
    'Ocultar códigos de reserva esconde os números de confirmação até você passar o mouse; Rótulos das rotas de reservas escreve o nome da reserva ao longo da rota dela.',
  'help.guide.travel-map-prefs.result':
    'O mapa da viagem segue isso em todas as viagens, até você virar as chaves de volta.',
  'help.guide.travel-map-prefs.tip.1':
    'Isso é por conta, não por viagem. Cada membro de uma viagem compartilhada vê as próprias escolhas.',
  // startup
  'help.guide.startup.title': 'Escolher com o que o TREK abre',
  'help.guide.startup.goal': 'Chegue onde você mais trabalha, não no painel toda vez.',
  'help.guide.startup.step.1': 'Em Inicialização, defina Página inicial como Painel ou Viagem ativa.',
  'help.guide.startup.step.2': 'Aba inicial escolhe qual aba de uma viagem aparece primeiro quando você abre uma.',
  'help.guide.startup.result': 'O próximo login e o próximo toque no logo vão direto para lá.',
  'help.guide.startup.tip.1': 'Viagem ativa é a viagem em andamento hoje, ou a próxima quando não há nenhuma.',
  // theme-scheme
  'help.guide.theme-scheme.title': 'Definir o tema e a cor de destaque',
  'help.guide.theme-scheme.goal': 'Deixe o TREK claro, escuro ou igual ao seu dispositivo, na cor que você gosta.',
  'help.guide.theme-scheme.step.1':
    'Em Theme, escolha Claro, Escuro ou Automático. Automático segue o seu dispositivo.',
  'help.guide.theme-scheme.step.2':
    'Escolha um Color scheme: Default, High contrast, Indigo, Teal, Rose, Amber, Violet ou Custom.',
  'help.guide.theme-scheme.step.3':
    'Com Custom, escolha um destaque entre os predefinidos ou informe o seu. Uma checagem de contraste ao lado diz se o texto continua legível sobre ele.',
  'help.guide.theme-scheme.result':
    'Botões, links e realces assumem o destaque em todo lugar, em cada dispositivo em que você entra.',
  'help.guide.theme-scheme.tip.1':
    'A barra de navegação também tem uma chave rápida claro ou escuro; ela define o mesmo tema.',
  'help.guide.theme-scheme.tip.2': 'High contrast é o esquema para escolher quando o padrão parece suave demais.',
  // readability
  'help.guide.readability.title': 'Ajustar legibilidade e tamanho do texto',
  'help.guide.readability.goal': 'Menos vidro, menos movimento, mais espaço ou letras maiores.',
  'help.guide.readability.step.1':
    'Em Readability, Transparency troca os painéis de vidro por superfícies sólidas, Reduce motion reduz as animações ao mínimo, e Density escolhe Comfortable ou Compact.',
  'help.guide.readability.step.2':
    'Text size escala Everything de uma vez; Advanced text sizes deixa títulos, subtítulos, corpo e legendas diferirem.',
  'help.guide.readability.result': 'O app inteiro acompanha na hora, incluindo os painéis do mapa e a jornada.',
  'help.guide.readability.tip.1': 'Reduce motion também segue a configuração do seu sistema quando você não mexe nela.',
  'help.guide.readability.tip.2':
    'O tamanho do texto é aplicado pelos níveis tipográficos, então nada é cortado; um tamanho que não cabe mais quebra a linha.',
  // dashboard-widgets
  'help.guide.dashboard-widgets.title': 'Escolher os widgets do painel',
  'help.guide.dashboard-widgets.goal': 'Mostre só os widgets que você usa, separadamente no desktop e no celular.',
  'help.guide.dashboard-widgets.step.1':
    'Em Dashboard widgets, ligue ou desligue cada widget para Desktop e para Mobile: a barra lateral direita como um todo, moeda, coleções, fusos horários, próximas reservas, países do Atlas e os números de viagem.',
  'help.guide.dashboard-widgets.step.2': 'Reset to defaults embaixo devolve a aba inteira ao jeito que veio.',
  'help.guide.dashboard-widgets.result':
    'O painel se reorganiza na hora; com a barra lateral direita desligada, ele se centraliza.',
  'help.guide.dashboard-widgets.tip.1': 'Widgets de um addon só aparecem enquanto o admin tiver esse addon ligado.',
  'help.guide.dashboard-widgets.tip.2':
    'O próprio painel lembra sua visão em grade ou lista e a ordenação por dispositivo.',
  // map-provider
  'help.guide.map-provider.title': 'Escolher o motor e o estilo do mapa',
  'help.guide.map-provider.goal': 'Alterne entre o mapa clássico, blocos vetoriais e o mapa 3D do Mapbox.',
  'help.guide.map-provider.step.1':
    'Em Provedor de mapa, escolha Leaflet para o mapa 2D clássico com quaisquer blocos raster, MapLibre para blocos vetoriais do OpenFreeMap sem token, ou Mapbox para blocos vetoriais com prédios 3D e terreno.',
  'help.guide.map-provider.step.2':
    'Escolha um Estilo do mapa ou um Modelo de mapa para o visual. O Mapbox precisa de um Token de acesso Mapbox, alguns estilos raster de uma Chave de API do CARTO; o link ao lado do campo leva aonde conseguir uma.',
  'help.guide.map-provider.step.3':
    'Modo alta qualidade adiciona antialiasing e a projeção de globo. Clique em Salvar mapa.',
  'help.guide.map-provider.result':
    'Todo mapa no TREK, viagens, Atlas, Coleções e a jornada, é desenhado pelo motor que você escolheu.',
  'help.guide.map-provider.tip.1': 'Sem token, o Mapbox recorre ao mapa padrão em vez de não mostrar nada.',
  'help.guide.map-provider.tip.2':
    'Os blocos de mapa que você armazena offline vêm do provedor ativo quando você os baixa.',
  // notification-channels
  'help.guide.notification-channels.title': 'Configurar onde as notificações chegam até você',
  'help.guide.notification-channels.goal':
    'Receba lembretes de viagem e eventos de colaboração no seu celular ou em outra ferramenta.',
  'help.guide.notification-channels.step.1':
    'Em Notificações, preencha um Tópico Ntfy; adicione sua própria URL do servidor Ntfy (opcional) e um Token de acesso (opcional) se você mantém um. Testar envia uma mensagem na hora.',
  'help.guide.notification-channels.step.2':
    'Ou informe uma URL do webhook que recebe cada evento como JSON, e teste do mesmo jeito com Testar.',
  'help.guide.notification-channels.step.3':
    'Nas linhas abaixo, ligue ou desligue cada evento por canal. Um canal de plugin diz Configurar até ser configurado nas configurações do plugin; Enviar teste experimenta um.',
  'help.guide.notification-channels.result':
    'Os eventos saem pelos canais que estão ligados. O sino na barra de navegação continua mostrando eles no app de qualquer jeito.',
  'help.guide.notification-channels.tip.1':
    'Preferências por viagem ficam na própria viagem, nas configurações de notificação dela.',
  'help.guide.notification-channels.tip.2':
    'O admin pode preencher um servidor ntfy padrão para todo mundo; você ainda escolhe o seu próprio tópico.',
  // photo-providers
  'help.guide.photo-providers.title': 'Conectar uma biblioteca de fotos',
  'help.guide.photo-providers.goal': 'Deixe a jornada puxar as fotos do dia do Immich ou do Synology Photos.',
  'help.guide.photo-providers.step.1':
    'Em Integrações, encontre a seção do provedor e informe a URL e a chave de API dele. O Immich também oferece espelhar os uploads da jornada de volta na biblioteca.',
  'help.guide.photo-providers.step.2': 'Clique em Testar conexão e depois em Salvar.',
  'help.guide.photo-providers.result':
    'A aba External photos do editor de entrada busca na biblioteca conectada o dia da entrada, as mais próximas do local da entrada primeiro.',
  'help.guide.photo-providers.tip.1':
    'A conexão é sua: outros membros de uma jornada conectam as próprias bibliotecas.',
  'help.guide.photo-providers.tip.2':
    'Um provedor sem dados de GPS nas fotos funciona mesmo assim; a lista fica então em ordem de tempo.',
  // api-keys
  'help.guide.api-keys.title': 'Criar uma chave de API',
  'help.guide.api-keys.goal': 'Deixe um script ou outra ferramenta chamar a API do TREK como você.',
  'help.guide.api-keys.step.1':
    'Em Chaves de API, clique em Criar chave e dê a ela um nome que diga onde vai ser usada.',
  'help.guide.api-keys.step.2':
    'Copie a chave do diálogo: ela é mostrada uma vez só. Exclua uma chave da lista quando a ferramenta não precisar mais dela.',
  'help.guide.api-keys.result':
    'Requisições com essa chave agem com as suas permissões; a lista mostra quando cada chave foi criada e usada pela última vez.',
  'help.guide.api-keys.tip.1': 'Uma chave por ferramenta torna a revogação indolor.',
  'help.guide.api-keys.tip.2':
    'Para um assistente de IA, use MCP com OAuth no lugar; chaves de API são para clientes HTTP simples.',
  // mcp-oauth
  'help.guide.mcp-oauth.title': 'Conectar um assistente de IA por MCP',
  'help.guide.mcp-oauth.goal': 'Dê ao Claude, a um IDE ou a outro cliente MCP acesso às suas viagens.',
  'help.guide.mcp-oauth.step.1':
    'Em Configuração MCP, copie o Endpoint MCP, ou a Configuração do cliente inteira para um cliente que aceita um trecho JSON.',
  'help.guide.mcp-oauth.step.2':
    'Clientes que fazem login pelo navegador usam OAuth 2.1: Novo cliente em Clientes OAuth 2.1, com suas URIs de redirecionamento, os Escopos permitidos e, para um servidor sem navegador, Cliente de máquina.',
  'help.guide.mcp-oauth.step.3':
    'Renovar segredo e Excluir cliente ficam em cada cliente; Sessões OAuth ativas lista o que está logado e deixa você revogar. Tokens de API com Criar novo token é o caminho antigo de entrada.',
  'help.guide.mcp-oauth.result':
    'O cliente pode ler e alterar o que os escopos dele permitem, como você, e cada ação aparece com o seu nome.',
  'help.guide.mcp-oauth.tip.1':
    'Escopos são a rede de segurança: dê a um cliente só o escopo de leitura até ele precisar de mais.',
  'help.guide.mcp-oauth.tip.2': 'O admin pode desligar o MCP para a instância inteira; aí esta seção não está lá.',
  // offline-prepare
  'help.guide.offline-prepare.title': 'Levar viagens para o offline',
  'help.guide.offline-prepare.goal': 'Tenha suas viagens e os mapas delas neste dispositivo antes de a conexão cair.',
  'help.guide.offline-prepare.step.1':
    'Em O que armazenar offline, deixe Armazenar blocos do mapa offline ligado e ligue as viagens que você quer neste dispositivo.',
  'help.guide.offline-prepare.step.2':
    'Clique em Baixar para uso offline em Preparar para uso offline. Isso busca as viagens e os blocos ao redor dos lugares delas.',
  'help.guide.offline-prepare.step.3':
    'Forçar modo offline em Modo offline deixa você conferir se está tudo lá antes de sair.',
  'help.guide.offline-prepare.result':
    'As viagens abrem sem conexão; as mudanças que você faz esperam numa fila e saem ao reconectar.',
  'help.guide.offline-prepare.tip.1':
    'Blocos ocupam mais espaço: a seção Cache offline mostra o que está armazenado, por viagem.',
  'help.guide.offline-prepare.tip.2': 'Instale o TREK como app pelo navegador para o início offline mais suave.',
  // offline-conflicts
  'help.guide.offline-conflicts.title': 'Decidir o que vence num conflito de sincronização',
  'help.guide.offline-conflicts.goal':
    'Escolha como o TREK resolve uma mudança feita offline contra uma feita em outro lugar.',
  'help.guide.offline-conflicts.step.1':
    'Em Conflitos de sincronização, escolha Perguntar sempre, Sempre manter a minha versão ou Sempre manter a versão do servidor.',
  'help.guide.offline-conflicts.step.2':
    'Cache offline mostra viagens, mudanças pendentes e com falha e conflitos; Sincronizar agora empurra a fila, Limpar cache esvazia o dispositivo.',
  'help.guide.offline-conflicts.result':
    'Com Perguntar, um conflito mostra as duas versões e deixa você escolher; com as outras duas ele é resolvido em silêncio.',
  'help.guide.offline-conflicts.tip.1': 'Limpar cache remove só a cópia neste dispositivo; nada no servidor é tocado.',
  // profile
  'help.guide.profile.title': 'Alterar seu perfil',
  'help.guide.profile.goal': 'Atualize seu nome, e-mail e foto.',
  'help.guide.profile.step.1':
    'Em Conta, edite Nome de usuário e E-mail. O avatar aceita um upload seu; remova-o para voltar às iniciais.',
  'help.guide.profile.step.2': 'Clique em Salvar perfil.',
  'help.guide.profile.result':
    'Seu nome e sua foto são atualizados em todo lugar de uma vez, inclusive nas viagens que você compartilha.',
  'help.guide.profile.tip.1': 'Uma conta que entra por OIDC mostra isso aqui; o e-mail então vem do provedor.',
  // password
  'help.guide.password.title': 'Alterar sua senha',
  'help.guide.password.goal': 'Defina uma senha nova.',
  'help.guide.password.step.1': 'Em Alterar senha, informe sua senha atual e depois a nova duas vezes.',
  'help.guide.password.step.2': 'Clique em Atualizar senha.',
  'help.guide.password.result': 'A senha nova vale no próximo login; as outras sessões continuam logadas.',
  'help.guide.password.tip.1': 'Uma conta que entra por OIDC não tem senha do TREK para alterar.',
  // mfa
  'help.guide.mfa.title': 'Ativar a autenticação em duas etapas',
  'help.guide.mfa.goal': 'Proteja a conta com um código de um app autenticador.',
  'help.guide.mfa.step.1': 'Em Autenticação em duas etapas (2FA), clique em Configurar autenticador.',
  'help.guide.mfa.step.2':
    'Escaneie o código QR com o seu app, ou informe o segredo à mão, depois digite o código de seis dígitos que ele mostra e clique em Ativar 2FA.',
  'help.guide.mfa.step.3':
    'Guarde os códigos de backup: copie, baixe ou imprima. Cada um funciona uma vez, quando você não tem o celular à mão.',
  'help.guide.mfa.result': 'Todo login pede um código depois da senha.',
  'help.guide.mfa.tip.1': 'Desativar 2FA exige sua senha e um código atual.',
  'help.guide.mfa.tip.2': 'O admin pode exigir 2FA de todo mundo; aí não dá para desligar aqui.',
  // passkeys
  'help.guide.passkeys.title': 'Entrar com uma passkey',
  'help.guide.passkeys.goal': 'Use a digital, o rosto ou o PIN do seu dispositivo em vez de uma senha.',
  'help.guide.passkeys.step.1':
    'Em Passkeys, clique em Adicionar uma passkey e confirme com o seu dispositivo. Dê a ela um nome que diga qual dispositivo é.',
  'help.guide.passkeys.step.2':
    'A lista mostra cada passkey com o nome e quando foi usada pela última vez; o botão de excluir remove uma.',
  'help.guide.passkeys.result': 'A página de login oferece a passkey; a senha continua como reserva.',
  'help.guide.passkeys.tip.1':
    'Uma passkey vive no dispositivo ou no gerenciador de senhas dele, então adicione uma por dispositivo.',
  'help.guide.passkeys.tip.2':
    'Passkeys precisam de HTTPS; numa instância em HTTP puro a seção explica por que elas não estão disponíveis.',
  // delete-account
  'help.guide.delete-account.title': 'Excluir sua conta',
  'help.guide.delete-account.goal': 'Remova sua conta e os dados que são só seus.',
  'help.guide.delete-account.step.1': 'Lá embaixo em Conta, clique em Excluir conta e confirme.',
  'help.guide.delete-account.result':
    'Sua conta, suas próprias viagens e suas jornadas somem; viagens que você compartilha com outros ficam com eles.',
  'help.guide.delete-account.tip.1':
    'O último admin de uma instância não pode excluir a si mesmo; torne outra pessoa admin antes.',
  'help.guide.delete-account.tip.2': 'Não dá para desfazer. Exporte o que quiser guardar antes de confirmar.',

  // ── Screen: admin (all tabs) ──────────────────────────────────────────────────────────
  'help.ctx.admin.title': 'Administração',
  'help.ctx.admin.summary':
    'A instância por trás do TREK de todo mundo: quem pode entrar e como, o que está ligado, onde os arquivos ficam, como o servidor chega até as pessoas e como ele é salvo em backup. Só admins veem esta página; cada aba é uma tela própria na barra lateral.',
  'help.ctx.admin.bullet.1':
    'Os quatro cartões no topo contam usuários, viagens, lugares e arquivos; um banner acima deles anuncia uma versão mais nova do TREK.',
  'help.ctx.admin.bullet.2':
    'Usuários e Padrões do usuário: contas, links de convite e as configurações de mapa com que uma conta nova começa.',
  'help.ctx.admin.bullet.3':
    'Personalização, Configurações, Complementos e Plugins: modelos de mala, categorias e férias escolares; métodos de login e chaves de API; os módulos de funções; plugins de terceiros.',
  'help.ctx.admin.bullet.4':
    'Armazenamento, Notificações, Acesso MCP e GitHub: para onde vão os uploads, os canais de toda a instância, tokens e sessões de clientes de IA, e o histórico de versões.',
  'help.ctx.admin.bullet.5':
    'Backup e Auditoria: backups sob demanda e agendados, e o registro de eventos relevantes para a segurança.',
  'help.ctx.admin-users.title': 'Usuários',
  'help.ctx.admin-users.summary':
    'Cada conta deste TREK, com função, e-mail e último login, e os links de convite que deixam as pessoas se registrarem numa instância fechada.',
  'help.ctx.admin-users.bullet.1':
    'A tabela: nome de usuário, e-mail, função, data de criação, último login e as ações por linha. Você aparece marcado como você.',
  'help.ctx.admin-users.bullet.2': 'Criar usuário no topo adiciona uma conta à mão, com uma senha que você entrega.',
  'help.ctx.admin-users.bullet.3':
    'Links de convite abaixo: links de registro de uso único com limite de usos, validade e, se quiser, uma viagem à qual o novo usuário entra ao chegar.',
  'help.ctx.admin-users.bullet.4':
    'Configurações de Permissões no fim: por ação, quem pode fazê-la, Todos, Membros da viagem, Dono da viagem ou Apenas administrador.',
  'help.ctx.admin-defaults.title': 'Padrões do usuário',
  'help.ctx.admin-defaults.summary':
    'As configurações com que uma conta nova começa, para que ninguém precise procurar primeiro a aba do mapa: motor de mapas, estilo, tokens e qualidade.',
  'help.ctx.admin-defaults.bullet.1':
    'Motor de mapas, estilo e token do Mapbox, chave CARTO e qualidade do Mapbox, exatamente como um usuário os definiria em Configurações, Mapa.',
  'help.ctx.admin-defaults.bullet.2':
    'Redefinir por campo devolve a escolha do próprio TREK; a configuração própria de um usuário sempre vence estas.',
  'help.ctx.admin-config.title': 'Personalização',
  'help.ctx.admin-config.summary':
    'O que toda viagem da instância compartilha: modelos de mala, o conjunto de categorias para lugares e coleções, e o catálogo de férias escolares de onde o Vacay bebe.',
  'help.ctx.admin-config.bullet.1':
    'Modelos de mala: listas nomeadas de categorias e itens das quais a lista de mala de uma viagem pode partir.',
  'help.ctx.admin-config.bullet.2':
    'Categorias: nome, ícone e cor das categorias usadas em todo o TREK, do inspetor de lugares às Coleções.',
  'help.ctx.admin-config.bullet.3':
    'Férias escolares: o catálogo de países e regiões, para lugares que as fontes embutidas não cobrem.',
  'help.ctx.admin-settings.title': 'Configurações',
  'help.ctx.admin-settings.summary':
    'Como as pessoas entram e com o que o servidor pode falar: métodos de login e registro, SSO, passkeys, política de dois fatores, as chaves de API para mapas, lugares e imagens, os provedores de busca e transporte, e os tipos de arquivo que os uploads podem ter.',
  'help.ctx.admin-settings.bullet.1':
    'Authentication Methods: Password Login, Password Registration, SSO Login, SSO Auto-Provisioning e Exigir autenticação em dois fatores (2FA).',
  'help.ctx.admin-settings.bullet.2':
    'Login Único (OIDC) com emissor, cliente e nome exibido; Login com passkey com Relying Party ID e origens.',
  'help.ctx.admin-settings.bullet.3':
    'Chaves de API: Google Maps, Unsplash e Amap, cada uma com Testar; Para que a chave é usada restringe a chave do Google às funções que você quer pagar.',
  'help.ctx.admin-settings.bullet.4':
    'Provedor de busca de lugares e Provedor de transporte público escolhem quem responde buscas e rotas; Tipos de arquivo permitidos limita os uploads.',
  'help.ctx.admin-addons.title': 'Complementos',
  'help.ctx.admin-addons.summary':
    'Os módulos de funções do TREK, cada um com uma chave: Listas, Custos, Documentos, Vacay, Atlas, Colab, Jornada, Coleções, Viagem de carro, MCP, AirTrail, Dawarich e a análise por IA. Desligado significa que a entrada de navegação, as rotas e a API somem para todo mundo.',
  'help.ctx.admin-addons.bullet.1':
    'Um bloco por complemento com sua chave e, onde houver, sublinhas para as opções dele.',
  'help.ctx.admin-addons.bullet.2':
    'Provedores de fotos e provedores de documentos também aparecem aqui como blocos, para que Immich ou Synology possam ser oferecidos aos usuários.',
  'help.ctx.admin-addons.bullet.3': 'Rastreamento de malas tem sua própria chave abaixo dos blocos.',
  'help.ctx.admin-plugins.title': 'Plugins',
  'help.ctx.admin-plugins.summary':
    'Plugins de terceiros que rodam em processo próprio ao lado do TREK, cada um com as permissões que pediu na instalação. Instale do catálogo, envie um pacote ou vincule uma pasta enquanto desenvolve um.',
  'help.ctx.admin-plugins.bullet.1':
    'A lista: cada plugin instalado com versão, status, assinatura e as permissões que tem; ativar, desativar, atualizar ou desinstalar por linha.',
  'help.ctx.admin-plugins.bullet.2':
    'Enviar plugin recebe um arquivo de pacote; Reescanear detecta uma pasta de plugin vinculada para desenvolvimento.',
  'help.ctx.admin-plugins.bullet.3':
    'Hosts permitidos por plugin: os endereços que um plugin pode chamar, já que a saída é negada por padrão.',
  'help.ctx.admin-storage.title': 'Armazenamento',
  'help.ctx.admin-storage.summary':
    'Onde os uploads ficam: o disco local, um bucket S3, ou um espelho que grava nos dois. Cada categoria de upload pode ir para um backend diferente, e Integridade diz se cada backend responde.',
  'help.ctx.admin-storage.bullet.1':
    'Backends: nome e tipo de cada um, com Testar, Editar e Remover; um definido pelo ambiente é somente leitura aqui.',
  'help.ctx.admin-storage.bullet.2':
    'Categorias: capas, documentos, fotos da jornada e o resto, cada uma atribuída a um backend; mudar uma oferece mover os arquivos existentes.',
  'help.ctx.admin-storage.bullet.3':
    'Integridade: uma verificação por backend, e o arquivo semente que prova que a configuração é a que o servidor vê.',
  'help.ctx.admin-notifications.title': 'Notificações',
  'help.ctx.admin-notifications.summary':
    'Os canais que a instância oferece aos usuários, e os que chegam até você como admin. Os usuários escolhem seus próprios tópicos e URLs em Configurações; você decide o que existe e configura o e-mail.',
  'help.ctx.admin-notifications.bullet.1':
    'In-App, Email (SMTP), Ntfy e Webhook: um painel para cada, com uma chave que oferece o canal aos usuários e a configuração do lado do servidor de que ele precisa.',
  'help.ctx.admin-notifications.bullet.2':
    'Lembretes de viagem: se o servidor envia o lembrete antes de uma viagem começar.',
  'help.ctx.admin-notifications.bullet.3':
    'Ntfy de admin e Webhook de admin: para onde vão eventos de admin como um backup que falhou ou uma versão nova, com Testar.',
  'help.ctx.admin-mcp-tokens.title': 'Acesso MCP',
  'help.ctx.admin-mcp-tokens.summary':
    'Cada token e sessão OAuth que clientes de IA têm neste TREK, de todos os usuários, com o poder de revogar qualquer um deles.',
  'help.ctx.admin-mcp-tokens.bullet.1': 'Tokens de API: quem criou, quando foi usado pela última vez, e Excluir.',
  'help.ctx.admin-mcp-tokens.bullet.2': 'Sessões OAuth: o cliente, o usuário e os escopos concedidos, e Revogar.',
  'help.ctx.admin-github.title': 'GitHub',
  'help.ctx.admin-github.summary':
    'O que há de novo no TREK: o histórico de versões do GitHub, a versão que você roda, e se saiu uma mais nova. A atualização em si acontece fora do app, no host.',
  'help.ctx.admin-github.bullet.1':
    'Histórico de versões lista as versões com suas notas; a mais nova leva Mais recente, e a sua está marcada.',
  'help.ctx.admin-github.bullet.2':
    'Atualização disponível aparece no cabeçalho assim que existe uma versão mais nova, com como atualizar no Docker e em outras instalações.',
  'help.ctx.admin-backup.title': 'Backup',
  'help.ctx.admin-backup.summary':
    'Backups completos do banco de dados e dos uploads, feitos à mão ou por agendamento, guardados no servidor e baixáveis como um único arquivo. Restaurar coloca um de volta.',
  'help.ctx.admin-backup.bullet.1':
    'Backup de dados: Criar backup, e a lista dos existentes com Baixar, Restaurar e excluir.',
  'help.ctx.admin-backup.bullet.2': 'Enviar backup traz um arquivo feito em outra instância ou num dia anterior.',
  'help.ctx.admin-backup.bullet.3': 'Backup automático: ligado ou desligado, intervalo, hora e dia, e quantos manter.',
  'help.ctx.admin-audit.title': 'Auditoria',
  'help.ctx.admin-audit.summary':
    'O registro de eventos administrativos e relevantes para a segurança: logins e falhas, mudanças de MFA, mudanças de usuários e configurações, backups e restaurações. Somente leitura, o mais novo primeiro.',
  'help.ctx.admin-audit.bullet.1': 'Uma linha por evento com hora, usuário, ação, recurso, IP e detalhes.',
  'help.ctx.admin-audit.bullet.2': 'Atualizar recarrega; Carregar mais volta mais atrás.',
  // create-user
  'help.guide.create-user.title': 'Criar um usuário',
  'help.guide.create-user.goal': 'Adicione uma conta à mão, sem convite.',
  'help.guide.create-user.step.1': 'Clique em Criar usuário no topo da aba Usuários.',
  'help.guide.create-user.step.2':
    'Informe Nome de usuário, E-mail e uma Senha, e escolha a Função: Usuário ou Administrador.',
  'help.guide.create-user.step.3': 'Clique em Criar usuário.',
  'help.guide.create-user.result':
    'A conta aparece na tabela e já pode entrar; entregue a senha por um canal em que você confia.',
  'help.guide.create-user.tip.1':
    'Para alguém que deve escolher a própria senha, um link de convite é o caminho melhor.',
  'help.guide.create-user.tip.2':
    'Admins veem esta página e o registro de auditoria; todo o resto é igual para as duas funções.',
  // edit-user
  'help.guide.edit-user.title': 'Mudar a função ou a senha de um usuário',
  'help.guide.edit-user.goal': 'Promova alguém, rebaixe, ou traga a pessoa de volta depois de uma senha perdida.',
  'help.guide.edit-user.step.1': 'Clique no lápis na linha do usuário. Editar usuário abre com os dados da conta.',
  'help.guide.edit-user.step.2':
    'Mude a Função, defina uma Nova senha, ou clique em Redefinir passkeys quando a pessoa perdeu o dispositivo onde estavam as passkeys, e depois Salvar.',
  'help.guide.edit-user.result':
    'A mudança vale na próxima requisição; uma senha nova funciona a partir do próximo login.',
  'help.guide.edit-user.tip.1': 'Você não pode tirar a função de admin de si mesmo enquanto for o último admin.',
  'help.guide.edit-user.tip.2':
    'Redefinir passkeys mantém a senha; a pessoa adiciona passkeys novas em Configurações, Conta.',
  // invite-links
  'help.guide.invite-links.title': 'Convidar alguém com um link',
  'help.guide.invite-links.goal':
    'Deixe uma pessoa se registrar numa instância fechada e, se quiser, cair direto numa viagem.',
  'help.guide.invite-links.step.1': 'Em Links de convite, clique em Criar link.',
  'help.guide.invite-links.step.2':
    'Defina Máx. usos e Expira após, opcionalmente Adicionar à viagem (opcional), e clique em Criar e copiar.',
  'help.guide.invite-links.step.3':
    'Envie o link. Cada linha mostra quantas vezes ele foi usado e quem o criou; Copiar link copia de novo, e links esgotados ou expirados ficam marcados.',
  'help.guide.invite-links.result':
    'Quem abre o link se registra com a própria senha e, com uma viagem escolhida, entra nela na hora.',
  'help.guide.invite-links.tip.1':
    'Links de convite funcionam mesmo com Password Registration desligado em Configurações.',
  'help.guide.invite-links.tip.2': 'Um link com um uso e validade curta é o padrão mais seguro para uma única pessoa.',
  // delete-user
  'help.guide.delete-user.title': 'Excluir um usuário',
  'help.guide.delete-user.goal': 'Remova uma conta e tudo que só pertence a ela.',
  'help.guide.delete-user.step.1': 'Clique no ícone de lixeira na linha do usuário e confirme Excluir usuário.',
  'help.guide.delete-user.result':
    'A conta, as viagens dela e as jornadas dela somem; viagens compartilhadas com outros ficam com os membros restantes.',
  'help.guide.delete-user.tip.1': 'Não dá para desfazer. Faça um backup antes se não tiver certeza.',
  'help.guide.delete-user.tip.2': 'O último admin não pode ser excluído; torne outra pessoa admin antes.',
  // permissions
  'help.guide.permissions.title': 'Decidir quem pode fazer o quê',
  'help.guide.permissions.goal': 'Defina, por ação, qual função tem permissão para fazê-la neste TREK.',
  'help.guide.permissions.step.1':
    'Em Configurações de Permissões, encontre a ação no grupo dela, por exemplo Excluir viagens em Gerenciamento de Viagens, e escolha o nível: Todos, Membros da viagem, Dono da viagem ou Apenas administrador. Uma linha alterada aparece marcada como personalizado.',
  'help.guide.permissions.step.2': 'Clique em Salvar. Restaurar padrões devolve cada linha ao nível embutido.',
  'help.guide.permissions.result':
    'A regra vale para todas as viagens de uma vez; os botões e menus de quem está abaixo do nível somem.',
  'help.guide.permissions.tip.1': 'Dono da viagem é a pessoa que criou a viagem; admins sempre podem fazer tudo.',
  'help.guide.permissions.tip.2':
    'Abaixe um nível em vez de excluir um membro: um membro que não pode editar ainda consegue ler e comentar.',
  // default-map
  'help.guide.default-map.title': 'Definir o mapa padrão para usuários novos',
  'help.guide.default-map.goal': 'Dê a cada conta nova um mapa que funciona sem token pessoal.',
  'help.guide.default-map.step.1':
    'Em Mapa, escolha o Motor de mapas e, para Mapbox ou MapLibre, o Estilo do mapa, o Token compartilhado do Mapbox e o Modo de alta qualidade; para um mapa raster, o Modelo de mapa e a Chave CARTO compartilhada.',
  'help.guide.default-map.step.2':
    'Ao lado de qualquer campo que você mudou, redefinir devolve a escolha do próprio TREK. Configurações padrão do usuário à esquerda faz o mesmo para Tema de cores, unidades e a moeda.',
  'help.guide.default-map.result':
    'Contas novas começam com isso; quem definiu o próprio mapa em Configurações mantém o seu.',
  'help.guide.default-map.tip.1':
    'Um token informado aqui é compartilhado por todos que não têm um próprio, então fique de olho na cota dele.',
  'help.guide.default-map.tip.2': 'Contas existentes que nunca mexeram na aba do mapa também seguem esses padrões.',
  // packing-templates
  'help.guide.packing-templates.title': 'Montar um modelo de mala',
  'help.guide.packing-templates.goal': 'Dê às viagens uma lista de mala para começar em vez de uma vazia.',
  'help.guide.packing-templates.step.1': 'Clique em Novo modelo, digite um nome e confirme com o tique.',
  'help.guide.packing-templates.step.2':
    'Abra o modelo e clique em Adicionar categoria; sob cada categoria, o + adiciona itens, e um item só precisa de um nome.',
  'help.guide.packing-templates.step.3':
    'Tudo é salvo conforme você faz. O lápis renomeia um modelo, uma categoria ou um item, a lixeira exclui.',
  'help.guide.packing-templates.result':
    'O modelo é oferecido na lista de mala de toda viagem; aplicá-lo copia os itens, então uma viagem pode mudá-los à vontade.',
  'help.guide.packing-templates.tip.1':
    'Um modelo por tipo de viagem, praia, cidade, trilha, é melhor que uma lista gigante.',
  'help.guide.packing-templates.tip.2': 'Excluir um modelo não mexe nas viagens que já o aplicaram.',
  // categories
  'help.guide.categories.title': 'Gerenciar o conjunto de categorias',
  'help.guide.categories.goal': 'Decida quais categorias lugares e coleções podem ter, e como elas aparecem.',
  'help.guide.categories.step.1':
    'Clique em Nova categoria, dê um nome, escolha um ícone e uma cor; a Pré-visualização mostra o resultado. Clique em Criar.',
  'help.guide.categories.step.2':
    'Passe o mouse sobre uma categoria na lista para editar ou excluir. Excluir pede confirmação.',
  'help.guide.categories.result':
    'O conjunto vale em todo lugar de uma vez: o inspetor de lugares, os pinos do mapa, Coleções e os filtros.',
  'help.guide.categories.tip.1':
    'Os lugares mantêm o id da categoria, então renomear uma categoria a renomeia em todo lugar.',
  'help.guide.categories.tip.2':
    'Uma categoria excluída deixa seus lugares sem nenhuma; reatribua antes se isso importar.',
  // school-holiday-catalog
  'help.guide.school-holiday-catalog.title': 'Manter férias escolares à mão',
  'help.guide.school-holiday-catalog.goal': 'Cubra um país ou região que as fontes de férias embutidas não cobrem.',
  'help.guide.school-holiday-catalog.step.1':
    'Em Férias escolares, clique em Adicionar país, informe o País e seu Código do país (ex.: US), e Salvar; depois Adicionar região para cada parte dele que é diferente.',
  'help.guide.school-holiday-catalog.step.2':
    'Clique numa região para abrir Região ou distrito escolar: Adicionar período, dê a cada um um Nome das férias, Data inicial e Data final, e Salvar. A lixeira remove um período, uma região ou, quando não restam regiões, um país.',
  'help.guide.school-holiday-catalog.result':
    'Os usuários encontram o país e a região em Configurações no Vacay e veem os períodos na grade anual deles.',
  'help.guide.school-holiday-catalog.tip.1':
    'Regiões das fontes embutidas não podem ser editadas aqui; adicione uma região manual ao lado se uma data estiver errada.',
  // auth-methods
  'help.guide.auth-methods.title': 'Decidir como as pessoas entram',
  'help.guide.auth-methods.goal': 'Abra ou feche o login por senha, o SSO e o registro, e exija 2FA.',
  'help.guide.auth-methods.step.1':
    'Em Authentication Methods, ligue ou desligue Password Login e Password Registration. Registro desligado significa contas novas só por links de convite, SSO ou à mão.',
  'help.guide.auth-methods.step.2':
    'SSO Login e SSO Auto-Provisioning precisam de um Login Único (OIDC) configurado abaixo; o provisionamento automático cria uma conta na primeira vez que alguém entra pelo SSO.',
  'help.guide.auth-methods.step.3':
    'Exigir autenticação em dois fatores (2FA) faz todo login por senha configurar um autenticador no próximo acesso. Login com passkey precisa do Relying Party ID e das origens pelas quais seu TREK é acessado.',
  'help.guide.auth-methods.result': 'A página de login oferece exatamente os métodos que você deixou ligados.',
  'help.guide.auth-methods.tip.1':
    'Um aviso aparece antes de você se trancar do lado de fora: pelo menos um caminho de entrada para admins continua ligado.',
  'help.guide.auth-methods.tip.2': 'Valores definidos por variáveis de ambiente aparecem aqui como somente leitura.',
  // oidc
  'help.guide.oidc.title': 'Conectar o login único',
  'help.guide.oidc.goal': 'Deixe as pessoas entrarem com o seu provedor de identidade.',
  'help.guide.oidc.step.1':
    'Em Login Único (OIDC), informe o Nome exibido do botão e a URL do emissor, o Client ID e o Client Secret do seu provedor, e depois Salvar.',
  'help.guide.oidc.step.2': 'Ligue SSO Login em Authentication Methods.',
  'help.guide.oidc.result':
    'A página de login mostra o botão de SSO; com SSO Auto-Provisioning ligado, quem entra pela primeira vez ganha uma conta automaticamente.',
  'help.guide.oidc.tip.1':
    'A URI de redirecionamento que o seu provedor precisa é o endereço do seu TREK mais o caminho de callback do OIDC da documentação.',
  'help.guide.oidc.tip.2':
    'O mapeamento de claims decide quais grupos do SSO viram admins; veja a página do OIDC na documentação.',
  // instance-keys
  'help.guide.instance-keys.title': 'Informar as chaves de API',
  'help.guide.instance-keys.goal':
    'Libere a busca de lugares do Google, capas do Unsplash e o Amap para a instância inteira.',
  'help.guide.instance-keys.step.1':
    'Em Chaves de API, cole a Chave da API Google Maps e clique em Testar; o campo diz se a chave responde.',
  'help.guide.instance-keys.step.2':
    'Em Para que a chave é usada, ligue só as funções que você quer cobradas nessa chave: autocompletar, detalhes, fotos, enriquecimento, o registro de pesquisas.',
  'help.guide.instance-keys.step.3':
    'Chave de API do Unsplash alimenta a busca de capas; Chave de API do Amap (高德地图) a busca de lugares na China. Teste cada uma do mesmo jeito.',
  'help.guide.instance-keys.result':
    'Os usuários ganham as funções sem chaves próprias; sem chave do Google, o TREK busca pela pilha gratuita do OpenStreetMap e pela TREK Places API.',
  'help.guide.instance-keys.tip.1':
    'A chave pessoal de um usuário em Configurações vence a chave da instância para esse usuário.',
  'help.guide.instance-keys.tip.2':
    'Chaves também podem vir de variáveis de ambiente; essas aparecem aqui como somente leitura.',
  // places-transit
  'help.guide.places-transit.title': 'Escolher os provedores de busca e transporte',
  'help.guide.places-transit.goal': 'Decida quem responde buscas de lugares e rotas de transporte público.',
  'help.guide.places-transit.step.1':
    'Em Provedor de busca de lugares, escolha Automático, Google Places, Amap (高德地图) ou OpenStreetMap. Automático usa a melhor chave que existir.',
  'help.guide.places-transit.step.2':
    'Em Provedor de transporte público, escolha Transitous (grátis), mundial e sem chave, ou Google, que precisa da chave do Google.',
  'help.guide.places-transit.result': 'Toda caixa de busca e toda rota de transporte público no TREK segue a escolha.',
  'help.guide.places-transit.tip.1': 'Um provedor sem a chave dele mostra um aviso aqui e recorre ao OpenStreetMap.',
  'help.guide.places-transit.tip.2': 'Rotas de transporte do Google são cobradas por requisição; o Transitous não.',
  // file-types
  'help.guide.file-types.title': 'Limitar os tipos de arquivo',
  'help.guide.file-types.goal': 'Decida quais extensões de arquivo os uploads podem ter.',
  'help.guide.file-types.step.1':
    'Em Tipos de arquivo permitidos, edite a lista de extensões separadas por vírgula e salve.',
  'help.guide.file-types.result':
    'Uploads de qualquer outro tipo são recusados com uma mensagem clara, nos documentos, no diário e nas capas.',
  'help.guide.file-types.tip.1':
    'Mantenha os tipos de imagem na lista; capas e fotos da jornada passam pela mesma verificação.',
  // toggle-addon
  'help.guide.toggle-addon.title': 'Ligar ou desligar um complemento',
  'help.guide.toggle-addon.goal': 'Ofereça um módulo de funções a todo mundo, ou tire-o.',
  'help.guide.toggle-addon.step.1':
    'Vire a chave no bloco do complemento. A entrada de navegação aparece ou some para todo mundo de uma vez.',
  'help.guide.toggle-addon.step.2':
    'Alguns blocos têm sublinhas para suas opções, como Rastreamento de malas sob Listas ou os provedores de fotos sob Jornada; elas só aparecem enquanto o complemento está ligado.',
  'help.guide.toggle-addon.result':
    'Os dados de um complemento desligado são mantidos; ligá-lo de novo os mostra outra vez.',
  'help.guide.toggle-addon.tip.1': 'MCP desligado remove o endpoint e as seções de Integrações que dependem dele.',
  'help.guide.toggle-addon.tip.2':
    'Vacay, Atlas e Jornada são os complementos que os usuários mais pedem; Documentos precisa de armazenamento para uploads.',
  // install-plugin
  'help.guide.install-plugin.title': 'Instalar um plugin',
  'help.guide.install-plugin.goal': 'Adicione um plugin de terceiros e dê a ele exatamente as permissões que pede.',
  'help.guide.install-plugin.step.1':
    'Abra Descobrir, escolha um plugin e clique em Instalar; ou clique em Enviar plugin e escolha um pacote .zip ou .tar.gz.',
  'help.guide.install-plugin.step.2':
    'De volta em Instalado, leia a linha: o que o plugin pode ler ou gravar, os hosts que ele chama e se está assinado. Ligue Ativar plugin.',
  'help.guide.install-plugin.step.3':
    'O menu da linha oferece Reiniciar, Ver registro de erros, Hosts permitidos e Alterar versão…; Excluir desinstala. Uma atualização é oferecida na linha quando existe uma versão mais nova, e uma que pede novos direitos fica desligada até você aprová-los.',
  'help.guide.install-plugin.result':
    'O plugin roda em processo próprio; o que ele adiciona, widgets, camadas de mapa, ferramentas, aparece onde o plugin declara.',
  'help.guide.install-plugin.tip.1':
    'Reescanear detecta uma pasta de plugin vinculada para desenvolvimento sem pacote.',
  'help.guide.install-plugin.tip.2': 'Um plugin sem assinatura é marcado como tal; instale só quando confiar na fonte.',
  // storage-backends
  'help.guide.storage-backends.title': 'Mover uploads para o S3 ou um espelho',
  'help.guide.storage-backends.goal':
    'Mantenha arquivos em armazenamento de objetos, ou em disco e bucket ao mesmo tempo.',
  'help.guide.storage-backends.step.1':
    'Em Backends, clique em Adicionar backend, dê um Nome, escolha o Tipo, Local, S3 ou Espelho, preencha os campos e Aplicar. Testar verifica a conexão, Salvar alterações grava.',
  'help.guide.storage-backends.step.2':
    'Em Categorias, atribua cada categoria de upload a um backend. Mudar uma pergunta se deve Mover objetos existentes ou Apenas rotear novas gravações.',
  'help.guide.storage-backends.step.3':
    'Integridade no topo verifica cada backend; uma entrada vermelha nomeia o que falhou.',
  'help.guide.storage-backends.result':
    'Uploads novos vão para o backend atribuído; arquivos movidos são servidos de lá.',
  'help.guide.storage-backends.tip.1':
    'Um backend configurado por variáveis de ambiente é mostrado, mas não pode ser editado aqui.',
  'help.guide.storage-backends.tip.2':
    'Um espelho grava nos dois destinos e lê do primeiro; use-o para migrar sem tempo parado.',
  // channels-instance
  'help.guide.channels-instance.title': 'Configurar os canais de notificação',
  'help.guide.channels-instance.goal': 'Decida quais canais os usuários podem escolher, e configure o e-mail.',
  'help.guide.channels-instance.step.1':
    'Em Email (SMTP), informe SMTP Host, SMTP Port, SMTP User, SMTP Password e a From Address; Enviar e-mail de teste manda um e-mail para você.',
  'help.guide.channels-instance.step.2':
    'Ligue Ntfy e Webhook para oferecê-los; os usuários então informam o próprio tópico ou URL em Configurações, Notificações.',
  'help.guide.channels-instance.step.3':
    'Lembretes de viagem controla o lembrete antes de uma viagem começar; In-App está sempre ligado e aqui só é explicado.',
  'help.guide.channels-instance.result': 'A aba Notificações de cada usuário mostra os canais que você ligou.',
  'help.guide.channels-instance.tip.1':
    'Um servidor ntfy padrão informado aqui vem preenchido para os usuários; eles ainda podem indicar o próprio.',
  'help.guide.channels-instance.tip.2':
    'Canais de plugins aparecem sozinhos assim que um plugin com essa capacidade está ativo.',
  // admin-channels
  'help.guide.admin-channels.title': 'Receber eventos de admin no celular',
  'help.guide.admin-channels.goal': 'Saiba de backups que falharam, versões novas e outros eventos da instância.',
  'help.guide.admin-channels.step.1':
    'Em Ntfy de admin, informe um tópico e, se precisar, servidor e token; em Webhook de admin, uma URL.',
  'help.guide.admin-channels.step.2':
    'Clique em Enviar Ntfy de teste ou Enviar webhook de teste para ver uma mensagem chegar.',
  'help.guide.admin-channels.result': 'Eventos de admin vão para lá além do sino no app de cada admin.',
  'help.guide.admin-channels.tip.1':
    'Mantenha o tópico de admin separado do seu pessoal, para que uma queda não se afogue na conversa das viagens.',
  // mcp-tokens-admin
  'help.guide.mcp-tokens-admin.title': 'Revogar acesso de IA',
  'help.guide.mcp-tokens-admin.goal': 'Veja e corte cada token e sessão que um cliente de IA tem, de qualquer usuário.',
  'help.guide.mcp-tokens-admin.step.1':
    'Em Tokens de API, encontre o token por usuário e nome; a lixeira o exclui e o cliente para na hora.',
  'help.guide.mcp-tokens-admin.step.2':
    'Em Sessões OAuth, o mesmo para clientes baseados em navegador: cliente, usuário e data, e a lixeira revoga a sessão.',
  'help.guide.mcp-tokens-admin.result': 'O cliente precisa ser conectado de novo pelo usuário dele; nada mais muda.',
  'help.guide.mcp-tokens-admin.tip.1':
    'Os escopos dizem o que um cliente podia fazer; um escopo somente leitura é inofensivo de deixar.',
  'help.guide.mcp-tokens-admin.tip.2': 'Desligar o complemento MCP revoga tudo de uma vez.',
  // release-history
  'help.guide.release-history.title': 'Verificar se há uma versão nova',
  'help.guide.release-history.goal': 'Saiba se o seu TREK está atualizado e o que a próxima versão traz.',
  'help.guide.release-history.step.1':
    'Quando existe uma versão mais nova, Atualização disponível aparece no topo da página de admin; Ver no GitHub abre, e Como atualizar explica a atualização para Docker e para outras instalações.',
  'help.guide.release-history.step.2':
    'Histórico de versões lista cada versão com suas notas; Mostrar detalhes expande, a mais nova leva Mais recente, e Carregar mais volta mais atrás.',
  'help.guide.release-history.result':
    'A atualização acontece no host, puxando a imagem nova ou construindo a tag nova; o diretório de dados fica.',
  'help.guide.release-history.tip.1': 'Faça um backup antes de atualizar; a aba Backup fica ao lado.',
  'help.guide.release-history.tip.2':
    'Pré-lançamentos são mostrados, mas não anunciados como atualizações, a menos que você rode um.',
  // create-backup
  'help.guide.create-backup.title': 'Fazer e restaurar um backup',
  'help.guide.create-backup.goal':
    'Tire um retrato da instância inteira, guarde uma cópia em outro lugar, e consiga colocá-la de volta.',
  'help.guide.create-backup.step.1':
    'Em Backup de dados, clique em Criar backup. Ele empacota o banco de dados e os uploads em um único arquivo no servidor.',
  'help.guide.create-backup.step.2':
    'Baixar guarda uma cópia fora da máquina; a lixeira exclui os antigos para liberar espaço.',
  'help.guide.create-backup.step.3':
    'Restaurar em um backup, ou Enviar backup com um arquivo, substitui os dados atuais depois que Restaurar backup? pergunta uma vez.',
  'help.guide.create-backup.result':
    'Uma restauração traz de volta usuários, viagens, arquivos e configurações como estavam nesse backup; todo mundo é desconectado.',
  'help.guide.create-backup.tip.1':
    'Restaurar é a única ação aqui que não pode ser desfeita. Faça um backup novo antes.',
  'help.guide.create-backup.tip.2':
    'Os backups ficam no diretório de dados; uma cópia em outra máquina é o que faz deles um backup.',
  // auto-backup
  'help.guide.auto-backup.title': 'Agendar backups',
  'help.guide.auto-backup.goal': 'Deixe o servidor fazer backup sozinho e manter só os últimos.',
  'help.guide.auto-backup.step.1':
    'Em Backup automático, ligue Ativar backup automático e escolha o Intervalo, Executar no horário e, para semanal ou mensal, o Dia da semana ou Dia do mês.',
  'help.guide.auto-backup.step.2':
    'Excluir backups antigos após define por quanto tempo um backup é mantido; os mais antigos vão embora quando um novo é feito.',
  'help.guide.auto-backup.result':
    'Os backups aparecem na lista conforme o agendamento; uma falha chega aos canais de admin.',
  'help.guide.auto-backup.tip.1': 'Os horários seguem o fuso horário do servidor, mostrado na aba Auditoria.',
  'help.guide.auto-backup.tip.2': 'O espaço no servidor é finito; manter de três a cinco costuma bastar.',
  // audit-log
  'help.guide.audit-log.title': 'Ler o registro de auditoria',
  'help.guide.audit-log.goal': 'Descubra quem fez o quê, e quando.',
  'help.guide.audit-log.step.1':
    'Leia as linhas: hora, usuário, ação, recurso, IP e detalhes, o mais novo primeiro. As ações têm o nome do que aconteceu, como uma falha de login, uma mudança de MFA ou uma restauração.',
  'help.guide.audit-log.step.2': 'Atualizar recarrega o topo; Carregar mais volta mais atrás.',
  'help.guide.audit-log.result': 'Um rastro que você pode entregar a quem perguntar por que algo mudou.',
  'help.guide.audit-log.tip.1': 'Os horários são mostrados no fuso horário do servidor, indicado acima da tabela.',
  'help.guide.audit-log.tip.2': 'O registro é só de acréscimo; nada aqui pode ser editado ou excluído pelo app.',
};

export default help;
