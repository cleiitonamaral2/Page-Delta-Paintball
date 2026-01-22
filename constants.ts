import { Shield, Target, Users, Map, Moon, Flag, Skull, Crown } from 'lucide-react';

export const NAV_LINKS = [
  { name: 'O Delta', href: '#features' },
  { name: 'Missões', href: '#modes' },
  { name: 'Planos', href: '#pricing' },
  { name: 'Eventos', href: '#events' },
  { name: 'FAQ', href: '#faq' },
];

export const FEATURES = [
  {
    icon: Map,
    title: 'Campos Profissionais',
    description: 'Cenários táticos imersivos com obstáculos reais e vegetação densa para estratégia total.'
  },
  {
    icon: Target,
    title: 'Equipamentos de Elite',
    description: 'Marcadores revisados, máscaras anti-fog e coletes táticos higienizados a cada partida.'
  },
  {
    icon: Users,
    title: 'Instrutores Treinados',
    description: 'Juízes experientes para garantir o fair play e coordenar as missões com segurança.'
  },
  {
    icon: Shield,
    title: 'Segurança Total',
    description: 'Protocolos rigorosos, briefing detalhado e seguro para todos os participantes.'
  }
];

export const MODES = [
  {
    title: 'Missão Noturna',
    description: 'Adrenalina no escuro com iluminação tática e sinalizadores.',
    icon: Moon,
    image: 'https://loremflickr.com/600/400/night,forest,military?random=1'
  },
  {
    title: 'Capture a Bandeira',
    description: 'Estratégia clássica: invada a base inimiga e recupere o objetivo.',
    icon: Flag,
    image: 'https://loremflickr.com/600/400/paintball,flag?random=2'
  },
  {
    title: 'Team Deathmatch',
    description: 'Combate direto. A equipe que eliminar todos os oponentes vence.',
    icon: Skull,
    image: 'https://loremflickr.com/600/400/paintball,combat?random=3'
  },
  {
    title: 'Proteção VIP',
    description: 'Escolte o VIP até o ponto de extração sem deixá-lo ser atingido.',
    icon: Crown,
    image: 'https://loremflickr.com/600/400/swat,military?random=4'
  }
];

export const PLANS = [
  {
    name: 'Recruta',
    balls: 200,
    price: 89,
    highlight: false,
    features: ['Equipamento Completo', '2 horas de campo', 'Instrutor dedicado', 'Colete Tático']
  },
  {
    name: 'Veterano',
    balls: 300,
    price: 119,
    highlight: true,
    features: ['Equipamento Completo', '3 horas de campo', 'Instrutor dedicado', 'Colete Tático + Pescoceira', 'Fotos da partida']
  },
  {
    name: 'Elite Ops',
    balls: 500,
    price: 159,
    highlight: false,
    features: ['Equipamento Premium', 'Tempo Livre', 'Instrutor dedicado', 'Proteção Completa', 'Fotos + Drone', 'Fumaça Tática']
  }
];

export const EXTRAS = [
  { item: 'Recarga (100 bolas)', price: 'R$ 35,00' },
  { item: 'Granada de Tinta', price: 'R$ 25,00' },
  { item: 'Macacão Camuflado', price: 'R$ 15,00' },
];

export const MANUAL_RULES = [
  { title: 'Segurança', text: 'Nunca tire a máscara em campo. A regra número 1 para sua proteção.' },
  { title: 'Distância', text: 'Respeite a regra de rendição a menos de 5 metros.' },
  { title: 'Fair Play', text: 'Se for atingido e a bolinha estourar, levante o marcador e saia.' },
  { title: 'Idade', text: 'Idade mínima de 12 anos acompanhado dos responsáveis.' },
];

export const FAQ_ITEMS = [
  {
    question: 'O Paintball é seguro?',
    answer: 'Sim! Utilizamos equipamentos de proteção certificados e todas as partidas são supervisionadas por instrutores treinados. A máscara protege todo o rosto e o colete protege o tronco.'
  },
  {
    question: 'Nunca joguei, posso participar?',
    answer: 'Com certeza! A maioria dos nossos jogadores são iniciantes. Damos um treinamento completo (briefing) antes do jogo começar explicando como usar o marcador e as regras.'
  },
  {
    question: 'Dói levar um tiro?',
    answer: 'Você sente o impacto, semelhante a um "beliscão" forte. Com a adrenalina do jogo, muitas vezes nem se percebe na hora. Fornecemos coletes para minimizar o impacto.'
  },
  {
    question: 'Qual o número mínimo de jogadores?',
    answer: 'Recomendamos grupos de no mínimo 6 pessoas (3x3) para o jogo ficar dinâmico. Para grupos menores, consulte nossos horários de "Jogos Abertos".'
  },
  {
    question: 'Quanto tempo dura?',
    answer: 'Os pacotes variam de 1h a 3h de duração, dependendo da quantidade de bolinhas e do ritmo do grupo.'
  }
];