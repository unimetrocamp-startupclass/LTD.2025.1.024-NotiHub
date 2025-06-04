Documentação do Sistema

SUMÁRIO

Dados do Cliente	2
Equipe de Desenvolvimento	3
1. Introdução	4
2. Objetivo	5
3. Escopo	6
4. Backlogs do Produto	7
5. Cronograma	8
6. Materiais e Métodos	9
7. Resultados	10
8. Conclusão	11
9. Homologação do MVP junto ao cliente	12
10. Divulgação	13
11. Carta de Apresentação	15
12. Carta de Autorização	16
13. Relato individual do processo	18

Dados do Cliente
Título do Projeto: NotiHub
Cliente: ER Assessoria LTDA 
CNPJ/CPF: 51.112.94/0001-00 
Contato: (19) 9 9376-2200 
Email do contato: emerson.carlos.rocha@gmail.com 

 

Equipe de Desenvolvimento 
Nome completo	Curso	Disciplina
Allisson Maciel	- Ciencia da Computação - Programação Orientada a objetos em java
Hugo Martins Bassi	ADS	Programação Orientada a objetos em java
Rafael Sobral 	ADS	Programação Orientada a objetos em java

Professor Orientador
ksede Rodrigues Julio

1.	Introdução
 
	Com a crescente demanda por centralização e gestão eficiente de canais de comunicação, torna-se essencial o desenvolvimento de ferramentas que integrem múltiplas plataformas em uma interface única e acessível. Neste contexto, este projeto tem como objetivo a criação de um Dashboard Unificado para um cliente específico, visando consolidar mensagens e solicitações oriundas do Gmail, Zoom e Microsoft Teams, facilitando a visualização, o acompanhamento e o gerenciamento dessas comunicações.

O NotiHub tem como objetivo reunir, em um único ambiente, todas as notificações e mensagens recebidas, permitindo que sejam visualizadas de forma clara, rápida e acessível. Através da integração com as APIs oficiais dessas plataformas e com o uso da linguagem Python para o desenvolvimento, o sistema garantirá um fluxo de dados seguro, funcional e em tempo real.


2.	Objetivo

Centralizar e organizar, de forma automatizada, as notificações e mensagens recebidas por diferentes plataformas de comunicação (Gmail, Zoom e Microsoft Teams), permitindo que o cliente visualize e gerencie todas essas informações em um único dashboard, otimizando o fluxo de trabalho e reduzindo o tempo gasto com múltiplos acessos manuais.


3.	Escopo

Escopo do Projeto
O sistema NotiHub terá como principal foco a centralização de notificações e mensagens provenientes das plataformas Gmail, Zoom e Microsoft Teams em um único dashboard, acessível e organizado. A primeira versão do sistema implementará as seguintes funcionalidades principais:

Integração com APIs (Gmail, Zoom e Teams):
O sistema irá se conectar às APIs dessas três plataformas para coletar e exibir notificações e mensagens relevantes.

Dashboard unificado de notificações:
Será desenvolvido um painel principal onde o usuário poderá visualizar, filtrar e acessar rapidamente todas as notificações recebidas, organizadas por data, plataforma e tipo.

Funcionalidade de login e autenticação segura:
O sistema permitirá o acesso de usuários por meio de login com autenticação segura, utilizando OAuth 2.0 quando necessário.

Limites da Implementação
O projeto não incluirá funcionalidades de resposta ou envio de mensagens diretamente pelo NotiHub nesta versão inicial.

A integração será limitada somente às três plataformas citadas (Gmail, Zoom e Teams), não abrangendo redes sociais ou outros serviços de comunicação.

A atualização das notificações será feita em tempo quase real, respeitando os limites de chamada das APIs utilizadas.

O sistema será implementado apenas para acesso via navegador (web), sem versão mobile nativa nesta primeira entrega.

4.	Backlogs do Produto

Requisitos Funcionais (RF):
RF01 – Login seguro do usuário:
O sistema deve permitir que o usuário faça login utilizando autenticação segura, podendo ser integrada com autenticação OAuth 2.0.

RF02 – Integração com Gmail:
O sistema deve se conectar à API do Gmail para coletar e exibir as mensagens e notificações recebidas.

RF03 – Integração com Zoom:
O sistema deve se conectar à API do Zoom para acessar alertas de reuniões, mensagens diretas e chamadas.

RF04 – Integração com Microsoft Teams:
O sistema deve se conectar à API do Teams para exibir mensagens, menções e convites recebidos.

RF05 – Exibição unificada das notificações:
O sistema deve exibir todas as notificações integradas em um único dashboard, com filtros por plataforma, tipo e data.

RF06 – Atualização em tempo quase real:
O sistema deve atualizar as notificações em tempo próximo ao real, conforme permitido pelas APIs das plataformas.

RF07 – Visualização detalhada da notificação:
O usuário deve poder clicar em uma notificação para visualizar detalhes como remetente, conteúdo e horário.

RF08 – Marcar como lido/arquivar:
O sistema deve permitir que o usuário marque notificações como lidas ou as arquive do painel.

Requisitos Não Funcionais (RNF):
RNF01 – Linguagem de programação:
O backend será desenvolvido em Python, utilizando frameworks como Flask ou FastAPI.

RNF02 – Interface intuitiva e responsiva:
A interface será desenvolvida em React, com design responsivo para uso em desktop e dispositivos móveis.

RNF03 – Armazenamento seguro:
As notificações e preferências dos usuários devem ser armazenadas com segurança em um banco de dados relacional ou NoSQL.

RNF04 – Escalabilidade e disponibilidade:
O sistema deve ser projetado para ser hospedado em ambientes de nuvem, como Azure ou Google Cloud, garantindo alta disponibilidade.

RNF05 – Segurança e privacidade dos dados:
Todas as informações obtidas das APIs devem ser protegidas por criptografia durante a transmissão e o armazenamento.


5.	Cronograma

![image](https://github.com/user-attachments/assets/51dfcdbd-c967-4b08-9f51-432f68058308)


6.	Materiais e Métodos


a.	Modelagem do sistema: ![image](https://github.com/user-attachments/assets/1e9b050d-28b9-4482-a9c1-d8e6ff5abf39)

b.	Tecnologias utilizadas: O desenvolvimento do sistema Dashboard de Mensagens envolveu o uso de diversas linguagens, frameworks, bibliotecas, APIs e ferramentas, que juntos proporcionaram uma aplicação funcional, moderna e com integração em tempo real. Abaixo estão listadas as principais tecnologias utilizadas e uma breve descrição do uso de cada uma: 

JavaScript: Linguagem principal utilizada para a lógica do frontend, responsável por tornar a interface dinâmica e interativa. 

HTML: Estrutura base das páginas do sistema, definindo a organização dos elementos visuais da interface. 

CSS: Utilizado para o design e o estilo visual do sistema, garantindo uma aparência moderna, limpa e responsiva. 

React: Framework JavaScript usado para construir a interface de usuário de forma componentizada, facilitando a manutenção e reutilização de elementos da aplicação. 

Node.js: Ambiente de execução JavaScript no lado do servidor (backend), responsável pelo tratamento de requisições, autenticações e integração com APIs externas. 

API do Google Gmail: Utilizada para integrar mensagens enviadas ou recebidas por e-mail, permitindo monitoramento em tempo real dentro do dashboard. 


7.	Resultados

a.	Protótipo: <Dica: são as telas do software e suas descrições. Em cada uma delas, descreva as ações possíveis do usuário e reações do sistema. Isto pode ser feito através do print das telas do seu sistema. As telas não podem ocupar muito espaço da página, porém também não podem ficar ilegíveis>
b.	Códigos das principais funcionalidades: <Dica: copy-cole aqui as seções mais relevantes do seu código. Insira comentários sobre cada seção.>

8.	Conclusão

a. Impacto no sistema: A implementação do Dashboard de Mensagens trouxe impactos positivos significativos para o processo de comunicação e gestão do cliente. Antes da adoção do sistema, a coleta e o acompanhamento de mensagens em múltiplas plataformas (como Google Meet, Microsoft Teams e Zoom) eram descentralizados, manuais e suscetíveis a atrasos ou falhas de controle. 

Com o sistema, passou a ser possível: 

Centralizar todas as mensagens em um único painel intuitivo; 

Acompanhar em tempo real o volume de interações por empresa e por plataforma; 

Integrar automaticamente novas contas por meio de autenticação simplificada; 

Reduzir o tempo gasto na busca por informações e melhorar a tomada de decisões. 

Como resultado, o cliente terá um aumento na produtividade da equipe, maior controle da comunicação corporativa e redução de erros operacionais, além de otimização do tempo e dos recursos humanos. 

b. Melhorias Futuras: Uma melhoria planejada para versões futuras do sistema é a integração total da apis e sua otimização, visto que é um processo complicado e exige investimento. A implementação das apis que faltam (teams e zoom) além de outras extras como twitter, Facebook e WhatsApp iria enriquecer a experiência do Notihub. 

Outras possíveis mudanças seriam:  

Uma área de configurações para que o usuário possa personalizar de forma livre. 

Filtros e barra de pesquisa para encontrar as mensagens que o usuário deseja. 

9.	Homologação do MVP junto ao cliente

Após as entregas parciais, realizadas de acordo com os requisitos do sistema  e cronograma, o MVP foi apresentado em uma reunião, realizada entre o time de desenvolvedores e o cliente.

<Dica: inserir uma foto da homologação em cada linha do quadro abaixo. Serão 4 fotos (tiradas no momento da homologação) e, na linha debaixo, uma legenda para cada uma delas. A homologação, preferencialmente, deve ser presencial. Se não for viável, pode ser feita por videoconferência com prints da tela.>

<foto 1: foto do time e cliente com o primeiro slide de fundo>	<foto 2: foto de um integrante apresentando o MVP.>
Da esquerda para direita: <legenda 1: descreva quem está na foto>	<legenda 2: coloque o nome de quem está apresentando>
<foto 3: foto dos participantes assistindo a homologação>	<foto 4: foto do plano geral do local>
Participantes da homologação assistindo a apresentação	Participantes da homologação

Segue abaixo a lista de presentes na homologação do MVP.

Lista de presentes na Homologação
<Cole aqui a foto da lista de presentes na homologação.>

Ao final da apresentação, o sistema  foi homologado pelo cliente.

10.	Divulgação

a.	Linkedin do Projeto
https://www.linkedin.com/in/notihub-application-82a805360/ 
![Uploading image.png…]()



b.	Seminário de Projetos de Software

Vídeo da apresentação: <Grave sua apresentação, poste no Linkedin do projeto e insira aqui o link público (acesso sem login) do vídeo da apresentação>

<Na tabela abaixo, inserir uma foto da apresentação em cada linha. Serão 4 fotos (tiradas no momento da apresentação). Para cada foto, descreva uma legenda na linha de baixo.>

<foto 1: foto do time com o primeiro slide de fundo>	<foto 2: foto de um integrante apresentando o sistema.>
Da esquerda para direita: <legenda 1: descreva quem está na foto>	<legenda 2: coloque o nome de quem está apresentando>
<foto 3: foto plano geral da apresentação de frente para o fundo da sala>	<foto 4:  foto plano geral da apresentação do fundo para a frente da sala>
Participantes do evento assistindo a apresentação	Participantes do evento assistindo a apresentação

Segue abaixo a lista de presentes na apresentação.

Lista de presentes na Apresentação
<Faça uma lista de presença numa folha A4, contendo no alto da folha “Seminários de Projetos de Software”. A lista deve conter ra, nome e assinatura dos presentes. Cole aqui a foto desta lista.>

c.	FENETEC: Feira de Negócios em Tecnologia

Apresentação do projeto: <Um vídeo deve ser produzido mostrando o time apresentando seu projeto para algum visitante. Importante que neste video tenha uma tomada do banner e dos integrantes. Insira aqui o link público deste vídeo.>

<Na tabela abaixo, inserir uma foto da apresentação em cada linha. Serão 4 fotos (tiradas do evento). Para cada foto, descreva uma legenda na linha de baixo.>

<foto 1: foto do time ao lado do poster>	<foto 2: foto de um integrante apresentando o sistema.>
Da esquerda para direita: <legenda 1: descreva quem está na foto>	<legenda 2: coloque o nome de quem está apresentando>
<foto 3: foto do público assistindo sua apresentação>	<foto 4:  foto plano geral da FENETEC>
Participantes do evento assistindo a apresentação	Estandes da FENETEC

Segue abaixo a lista de presentes na FENETEC.

Lista de presentes na Apresentação
<cole aqui a lista de presença dos visitantes da FENETEC com nome e email do visitante . Os próprios times farão um form contendo no cabeçalho: Lista de Visitantes FENETEC. Compartilhe a planilha gerada pelo form com todos os times.>














11.	Carta de Apresentação
Vimos por desta apresentar o grupo de acadêmicos do Centro Universitário Unimetrocamp, localizada à Rua Sales de Oliveira, 1661 - Campinas - SP, a fim de convidá-lo a participar de uma atividade extensionista associada ao componente curricular <inserir o nome da disciplina>, sob responsabilidade do orientador Prof. Kesede Rodrigues Julio (profkesede64@gmail.com).
Em consonância ao Plano Nacional de Educação vigente, o Centro Universitário Unimetrocamp promove o Desenvolvimento de Software que, norteados pela metodologia de Gerenciamento Ágil Scrum, tem por princípios fundantes o diagnóstico dos problemas/demandas/necessidades, a participação ativa dos interessados/públicos participantes, a construção dialógica, coletiva e experiencial de conhecimentos, o planejamento de ações, o desenvolvimento e avaliação das ações, a sistematização dos conhecimentos, a avaliação das ações desenvolvidas.
Nesse contexto, a disciplina acima mencionada tem como principal escopo os temas relacionados à Programação Orientada à Objeto / Padrões de Projetos de Software, no que diz respeito ao desenvolvimento de um software utilizando Programação Orientada à Objeto.
Sendo assim, pedimos o apoio de <nome do cliente> para a realização das seguintes atividades: levantamento de requisitos, validação das entregas parciais, revalidação dos requisitos, homologação do MVP, ou qualquer outra intervenção que auxilie no desenvolvimento das competências de nossos acadêmicos e ao mesmo tempo possa contribuir para a comunidade em que estamos inseridos.
Aproveitamos a oportunidade para solicitarmos, em caso de aceite, que a parceria seja formalizada, mediante assinatura da Carta de Autorização, as atividades e informações que o(s) aluno(s) poderá(ão) ter acesso.
Em tempo, registramos ainda, o convite para a participação de todos os interessados no fórum semestral de acompanhamento e avaliação das atividades realizadas, que está previsto para o final deste semestre, e será comunicado previamente em convite específico.
Desde já nos colocamos à sua disposição para quaisquer esclarecimentos.
Atenciosamente,
Campinas, ____ de _________ de 202___.

____________________________________
Assinatura Direção Acadêmica da IES
 
____________________________________
Assinatura Docente


12.	Carta de Autorização
Eu, (preencher com nome do responsável), (preencher com cargo ocupado), da (nome da empresa, organização, associação, escola, secretaria, etc., situada no endereço – inserir o endereço), autorizo a realização das seguintes atividades acadêmicas do componente extensionista <código e nome da disciplina>, do Centro Universitário Unimetrocamp, sob orientação do Prof. Kesede Rodrigues Julio.
 
Atividades:
 
 
 
 
Conforme combinado em contato prévio, as atividades acima descritas são autorizadas para os seguintes alunos:
 
Nome dos/das alunos/as	Curso	Matrícula
 	 	 
 	 	 
 	 	 
 	 	 
		
 
Declaro que fui informado por meio da Carta de Apresentação sobre as características e objetivos das atividades que serão realizadas na organização/instituição/empresa a qual represento e afirmo estar ciente de tratar-se de uma atividade realizada com intuito exclusivo de ensino de alunos de graduação, sem a finalidade de exercício profissional.
 
Desta forma, autorizo, em caráter de confidencialidade:
 
●	 o acesso a informações e dados que forem necessários à execução da atividade;
●	 o registro de imagem por meio de fotografias;
●	 outro: (especificar)
 
 
Campinas, ___ de ___________de 202_.
 
___________________________________________________________________
(Assinatura, nome completo do responsável, email de contato e com carimbo da empresa)
 

13.	Relato individual do processo

<nome do aluno>
<um breve relato pessoal sobre o trabalho extensionista desenvolvido>

<nome do aluno>
<um breve relato pessoal sobre o trabalho extensionista desenvolvido>

<nome do aluno>
<um breve relato pessoal sobre o trabalho extensionista desenvolvido>

<nome do aluno>
<um breve relato pessoal sobre o trabalho extensionista desenvolvido>

<nome do aluno>
<um breve relato pessoal sobre o trabalho extensionista desenvolvido>


 

