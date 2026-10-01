'use strict';
const LP0=8000,HAND0=5,SLOTS=5,HLIM=6,KEY='duel-simple-v4';
// [nombre, atributo, clase, nivel, ATK, DEF, clave de efecto, texto del efecto]
const D=[
['Des Volstgalph','Tierra','Dragón',5,2200,1700,'volst','Si destruye un monstruo en batalla y lo envía al Cementerio, inflige 500 de daño al rival. (Su bono de ATK por Hechizos Normales/Juego Rápido no aplica: este mazo no tiene hechizos.)'],
['Alas de la Llama Perversa','Fuego','Pyro',2,700,600],
['Máscara de la Oscuridad','Oscuridad','Demonio',2,900,400,'mask','VOLTEO: añade 1 Trampa de tu Cementerio a tu mano (este mazo no tiene Trampas).'],
['Cortina de los Oscuros','Oscuridad','Lanza Conjuros',2,600,500],
['Espejo de Cambio de Empleo','Oscuridad','Demonio',3,800,1300],
['Alpha el Guerrero Magnético','Tierra','Roca',4,1400,1700],
['Beta el Guerrero Magnético','Tierra','Roca',4,1700,1600],
['Valkyrion el Guerrero Magno','Tierra','Roca',8,3500,3850,'valk','No se Invoca de Modo Normal ni se Coloca. Invocación Especial desde la mano sacrificando Alpha, Beta y Gamma (mano o campo). Gamma no está en este mazo.'],
['Espíritu de los Vientos','Viento','Lanza Conjuros',4,1700,1700],
['Kageningen','Tierra','Guerrero',2,800,600],
['Mano de la Invitación','Oscuridad','Zombi',3,700,900],
['Diosa del Tercer Ojo','Luz','Hada',4,1200,1000,'diosa','Sustituye a cualquier Material de Fusión (este mazo no tiene Fusiones).'],
['Héroe del Este','Tierra','Guerrero',3,1100,1000],
['Doma, el Ángel del Silencio','Oscuridad','Hada',5,1600,1400],
['Valquiria del Mago','Luz','Lanza Conjuros',4,1600,1800,'valq','Tu rival no puede elegir como objetivo de ataque a otros Lanza Conjuros boca arriba que controles, excepto a esta carta.'],
['Maga Oscura','Luz','Lanza Conjuros',6,2000,1700,'maga','Gana 300 ATK por cada "Mago Oscuro" o "Mago del Caos Negro" en cualquier Cementerio.'],
['Aquello que se Alimenta de Vida','Oscuridad','Demonio',3,1200,1000],
['Gris Oscuro','Tierra','Bestia',3,800,900],
['Sombrero Mágico Blanco','Luz','Lanza Conjuros',3,1000,700,'somb','Si inflige daño de batalla al rival, este descarta 1 carta al azar de su mano.'],
['Jinzo','Oscuridad','Máquina',6,2400,1500,'jinzo','Niega las Cartas de Trampa y sus efectos en el Campo (este mazo no tiene Trampas).'],
['Espíritu de los Libros','Viento','Bestia Alada',4,1400,1200],
['Ghoul de las Sombras','Oscuridad','Zombi',4,1600,1300,'ghoul','Gana 100 ATK por cada monstruo en tu Cementerio.'],
['Payaso del Sueño','Tierra','Guerrero',3,1200,900,'payaso','Al cambiar de Posición de Ataque a Defensa, destruye 1 monstruo del Campo rival.'],
['León Durmiente','Tierra','Bestia',3,700,1700],
['Pergamino de Dragón Yamatano','Viento','Dragón',2,900,300],
['Planta Oscura','Oscuridad','Planta',2,300,400],
['Gearfried el Caballero de Hierro','Tierra','Guerrero',4,1800,1600,'gear','Destruye toda Carta de Equipo que se le equipe (este mazo no tiene Equipos).'],
['Herramienta Antigua','Oscuridad','Máquina',4,1700,1400],
['Pájaro de la Fe','Viento','Bestia Alada',3,1500,1100],
['Orión, el Rey de la Batalla','Luz','Hada',4,1800,1500],
['Ansatsu','Tierra','Guerrero',5,1700,1200],
['LaMoon','Luz','Lanza Conjuros',4,1200,1700],
['Nemuriko','Oscuridad','Lanza Conjuros',3,800,900],
['Control Climático','Luz','Hada',2,600,400],
['Octoberser','Agua','Aqua',5,1600,1400],
['Hyozanryu','Luz','Dragón',7,2100,2800],
['El Decimotercer Sepulcro','Oscuridad','Zombi',3,1300,900],
['Charubin el Caballero de Fuego','Fuego','Pyro',3,1100,800],
['Cadena Mística de Captura','Luz','Hada',2,700,700],
['Mano del Demonio','Oscuridad','Zombi',2,600,600],
['Fantasma Ingenioso','Oscuridad','Demonio',4,1400,1300],
['Mano Misteriosa','Oscuridad','Demonio',2,500,500],
['Estatua Dragón','Tierra','Guerrero',3,1100,900],
['Zombi Plateado de Ojos Azules','Oscuridad','Zombi',3,900,700],
['Maestro de los Sapos','Agua','Aqua',3,1000,1000],
['Caracol con Púas','Oscuridad','Insecto',3,700,1300],
['Manipulador de la Llama','Fuego','Lanza Conjuros',3,900,1000],
['Necrolancer, el Señor del Tiempo','Oscuridad','Lanza Conjuros',3,800,900],
['Djinn, el Observador del Viento','Viento','Lanza Conjuros',3,700,900],
['El Ladrón Fantasma Encantador','Oscuridad','Lanza Conjuros',2,700,700],
['Templo de Cráneos','Oscuridad','Zombi',4,900,1300],
['Exodia Necross','Oscuridad','Lanza Conjuros',4,1800,0,'exod','No puede ser Invocada de Modo Normal; solo con el efecto de "Contrato con Exodia". No es destruida en batalla ni por efectos de Magia/Trampa. Cada uno de tus turnos gana 500 ATK. Es destruida si no tenés las 5 partes de Exodia en tu Cementerio.'],
['Huevo Monstruoso','Tierra','Guerrero',3,600,900],
['Señor de la Lámpara','Oscuridad','Lanza Conjuros',4,1400,1200],
['Akihiron','Agua','Aqua',5,1700,1400],
['Jinzo - Señor','Oscuridad','Máquina',8,2600,1600,'jz2','Solo se Invoca de Modo Especial sacrificando a "Jinzo" boca arriba que controles. Niega las Cartas de Trampa y sus efectos en el Campo. Una vez por turno puede destruir las Trampas boca arriba del rival e infligir 300 de daño por cada una.'],
['La Sombra Roja Derretida','Agua','Aqua',2,500,700],
['Dokuroizo, la Parca','Oscuridad','Zombi',3,900,1200],
['Parca de Fuego','Oscuridad','Zombi',2,700,500],
['Larvas','Tierra','Bestia',3,800,1000],
['Armadura Dura','Tierra','Guerrero',3,300,1200],
['Hierba de Fuego','Tierra','Planta',2,700,600],
['Planta Come-Hombres','Tierra','Planta',2,800,600],
['Pico de Excavación','Tierra','Bestia',2,500,800],
['M-Guerrero Nº 1','Tierra','Guerrero',3,1000,500],
['M-Guerrero Nº 2','Tierra','Guerrero',3,500,1000],
['Sabiduría Manchada','Oscuridad','Demonio',3,1250,800,'sab','Cuando esta carta pasa de Posición de Ataque a Defensa, barajás tu Deck.'],
['Lisark','Tierra','Bestia',4,1300,1300],
['Señor de Zemia','Oscuridad','Demonio',4,1300,1000],
['La Mano del Juicio','Tierra','Guerrero',3,1400,700],
['Titiritero Misterioso','Tierra','Guerrero',4,1000,1500,'titi','Mientras esté boca arriba en el campo, ganás 500 LP por cada monstruo adicional Invocado (Normal, Tributo o Volteo; no Especial), incluidos los de tu rival.'],
['Mago Oscuro del Caos','Oscuridad','Lanza Conjuros',8,2800,2600,'caos','Al ser Invocada de Modo Normal o Especial: podés añadir a tu mano 1 Carta Mágica de tu Cementerio. Destierra cualquier monstruo destruido en batalla por esta carta. Si va a dejar el Campo boca arriba, es desterrada.'],
['Dragón de Fuego Oscuro','Fuego','Dragón',4,1500,1250,'fus','Monstruo de Fusión: "Hierba de Fuego" + "Pequeño Dragón". Necesita Polimerización (llega en la próxima tanda).'],
['Rey Oscuro del Abismo','Oscuridad','Demonio',3,1200,800],
['Espíritu del Arpa','Luz','Hada',4,800,2000],
['Gran Ojo','Oscuridad','Demonio',4,1200,1000,'ojo','VOLTEO: mirás las 5 cartas superiores de tu Deck, las ordenás como quieras y las devolvés al tope.'],
['Armaill','Tierra','Guerrero',3,700,1300],
['Prisionero Oscuro','Oscuridad','Demonio',3,600,1000],
['Pájaro Sigiloso','Oscuridad','Demonio',3,700,1700,'sig','Una vez por turno podés voltear esta carta a Defensa boca abajo. Al ser Invocada por Volteo, inflige 1000 de daño a los LP del rival.'],
['Cerebro Antiguo','Oscuridad','Demonio',3,1000,700],
['Ojo de Fuego','Fuego','Pyro',2,800,600],
['Monstortuga','Agua','Aqua',3,800,1000],
['Alcanzador de Garra','Oscuridad','Demonio',3,800,1000],
['Fantasma Dewan','Oscuridad','Lanza Conjuros',2,700,600],
['Arlownay','Tierra','Planta',3,800,1000],
['Sombra Oscura','Viento','Demonio',3,1000,600],
['Payaso Enmascarado','Oscuridad','Guerrero',2,500,700],
['Baratija de la Suerte','Luz','Lanza Conjuros',2,600,800],
['Fuerza de Ataque Goblin','Tierra','Guerrero',4,2300,0,'gob','Si esta carta ataca, pasa a Posición de Defensa al final de la Fase de Batalla. No podés cambiar su posición hasta el final de tu próximo turno, salvo por el efecto de una carta.'],
['Armadura de Ojo','Tierra','Guerrero',2,600,500],
['Reflejo de Demonio Nº 2','Luz','Bestia Alada',4,1100,1400],
['Deeg de la Puerta','Oscuridad','Bestia',3,700,800],
['Synchar','Tierra','Bestia',3,800,900],
['Akakieisu','Oscuridad','Lanza Conjuros',3,1000,800],
['Lala Li-Oon','Viento','Trueno',2,600,600],
['Llave de la Maza','Luz','Hada',1,400,300],
['Tigre Tortuga','Agua','Aqua',4,1000,1500],
['Terra el Terrible','Oscuridad','Demonio',4,1200,1300],
['Doron','Tierra','Guerrero',2,900,500],
['Caballero Arma','Agua','Aqua',4,1000,1200]];
Object.entries({1:6,9:5,17:4,22:5,24:4,26:1,28:5,29:4,30:5,32:5}).forEach(([i,l])=>D[i-1][3]=l);
const C=D.map(([n,at,ra,lv,a,d,k,x],i)=>({id:i+1,n,at,ra,lv,a,d,k,x}));
const pad=id=>String(id).padStart(3,'0'),img=id=>`assets/t/${pad(id)}.jpg`,big=id=>`assets/cards/${pad(id)}.jpg`,BACK='assets/back.png';
const SP={8:['Alpha el Guerrero Magnético','Beta el Guerrero Magnético','Gamma el Guerrero Magnético'],56:['Jinzo'],52:null};
let DK=[[],[]],SAVED=null;

const $=(s,r=document)=>r.querySelector(s);
const el=(t,c,h)=>{const e=document.createElement(t);if(c)e.className=c;if(h!=null)e.innerHTML=h;return e};
let G,uid=0,shown=[LP0,LP0],mute=false,AC;const Z={};
const P=i=>G.p[i],me=()=>P(G.turn),op=()=>P(1-G.turn),busy=()=>G.over||G.curtain;
const cd=m=>C[m.id-1],nm=m=>cd(m).n,need=lv=>lv>=7?2:lv>=5?1:0;
const isMage=c=>c.n=='Mago Oscuro'||c.n=='Mago del Caos Negro';
function atk(pi,m){const c=cd(m);let a=c.a;
  if(c.k=='maga')a+=300*G.p.reduce((s,p)=>s+p.grave.filter(g=>isMage(cd(g))).length,0);
  if(c.k=='ghoul')a+=100*P(pi).grave.length;return a}

function snd(f,d=.12,ty='square'){if(mute)return;try{AC=AC||new(window.AudioContext||window.webkitAudioContext)();
  const o=AC.createOscillator(),g=AC.createGain();o.type=ty;o.frequency.value=f;g.gain.value=.05;o.connect(g);g.connect(AC.destination);o.start();
  g.gain.exponentialRampToValueAtTime(.0001,AC.currentTime+d);o.stop(AC.currentTime+d)}catch(e){}}
function shuffle(a){for(let i=a.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[a[i],a[j]]=[a[j],a[i]]}return a}
const mkDeck=ids=>shuffle(ids.map(id=>({id,u:++uid})));

// ===== Reglas =====
function newGame(){
  G={p:[0,1].map(i=>({lp:LP0,deck:mkDeck(DK[i]),hand:[],field:Array(SLOTS).fill(null),grave:[],ban:[]})),turn:0,n:1,phase:'main',summoned:false,sel:null,mode:null,msg:'',log:[],over:null,fresh:0,curtain:true};
  shown=[LP0,LP0];draw(0,HAND0);draw(1,HAND0);msg('¡Comienza el duelo! El Jugador 1 empieza (sin batalla en el primer turno).');ui()}
function draw(pi,n=1){const p=P(pi);for(let i=0;i<n;i++){if(!p.deck.length)return win(1-pi,`El Jugador ${pi+1} no puede robar.`);p.hand.push(p.deck.pop())}}
function say(t){if(G)G.msg=t;const d=el('div','toast',t);document.body.append(d);setTimeout(()=>d.remove(),2400)}
function msg(t){G.log.unshift(`T${G.n}: ${t}`);G.log.length=Math.min(G.log.length,60);say(t)}
function win(w,why){if(G.over)return;G.over={w,why};msg(`Gana el Jugador ${w+1}. ${why}`);snd(880,.5)}
function lp(pi,d){const p=P(pi);p.lp=Math.max(0,p.lp+d);fx(pi,d);if(!p.lp)win(1-pi,`El Jugador ${pi+1} llegó a 0 LP.`)}
function fx(pi,d){const h=$(pi===G.turn?'#hudB':'#hudT'),f=el('div','fl '+(d<0?'neg':'pos'),(d>0?'+':'')+d);h.append(f);setTimeout(()=>f.remove(),1200);
  if(d<0){$('#board').classList.remove('shake');void $('#board').offsetWidth;$('#board').classList.add('shake');snd(200,.25,'sawtooth')}else snd(700)}
function kill(pi,i,by){const p=P(pi),m=p.field[i];p.field[i]=null;
  if(by&&by.id==72||m.id==72&&!m.fd){p.ban.push(m);msg(`${nm(m)} es desterrado.`)}else p.grave.push(m);
  if(by&&by.id==1){msg('Des Volstgalph inflige 500 de daño extra.');lp(pi,-500)}}
function hit(pi,d,by,t){lp(pi,-d);msg(`${t} ${d} de daño.`);
  if(by&&by.id==19&&P(pi).hand.length&&!G.over){const p=P(pi),r=p.hand.splice(Math.random()*p.hand.length|0,1)[0];p.grave.push(r);msg(`Sombrero Mágico Blanco: el rival descarta ${nm(r)}.`)}}

function summon(h,pos,slot){
  if(busy()||G.phase=='battle')return;
  const c=cd(me().hand[h]);
  if(c.id in SP)return say(`${c.n} solo se Invoca de Modo Especial.`);
  if(G.summoned)return say('Ya hiciste tu Invocación Normal o Colocación este turno.');
  const nd=need(c.lv),fr=me().field.filter(Boolean).length;
  if(nd>fr)return say(`Necesitás ${nd} monstruo(s) en tu campo para tributar.`);
  if(!nd&&fr>=SLOTS)return say('Tu campo está lleno.');
  if(nd){G.mode={k:'trib',h,pos,nd,sel:[]};G.sel=null;return ui()}
  place(h,pos,[],slot)}
function place(h,pos,tr,slot){const p=me(),c=p.hand.splice(h,1)[0];
  tr.forEach(i=>{p.grave.push(p.field[i]);p.field[i]=null});
  const pup=pups(),i=slot!=null&&!p.field[slot]?slot:p.field.indexOf(null);
  p.field[i]={id:c.id,u:c.u,pos:pos=='a'?'a':'d',fd:pos=='s',atkd:false,moved:false,t:G.n};
  G.summoned=true;G.fresh=c.u;G.mode=null;G.sel={z:'f',pi:G.turn,i};snd(440);if(pos=='a')titi(pup);
  msg(`Jugador ${G.turn+1} ${pos=='a'?'invoca a '+C[c.id-1].n+(tr.length?' (tributo)':''):'coloca un monstruo boca abajo'}.`);ui()}
const pups=()=>[0,1].map(pi=>P(pi).field.filter(m=>m&&m.id==71&&!m.fd).length);
function titi(pp){pp.forEach((n,pi)=>{if(n&&!G.over){msg(`Titiritero Misterioso: +${500*n} LP para el Jugador ${pi+1}.`);lp(pi,500*n)}})}
function special(h){
  if(busy()||G.phase=='battle')return;
  const p=me(),v0=p.hand[h],names=SP[v0.id];
  if(!names)return say('Solo entra con "Contrato con Exodia" (carta que aún no está en el juego).');
  const objs=[];
  for(const n of names){const o=(v0.id==8&&p.hand.find((c,i)=>i!==h&&nm(c)==n&&!objs.includes(c)))||p.field.find(m=>m&&!m.fd&&nm(m)==n&&!objs.includes(m));
    if(!o)return say(v0.id==8?'Requiere sacrificar Alpha, Beta y Gamma (Gamma aún no está en el juego).':'Requiere sacrificar a "Jinzo" boca arriba en tu campo.');objs.push(o)}
  if(!p.field.includes(null)&&!objs.some(o=>p.field.includes(o)))return say('Tu campo está lleno.');
  const v=p.hand.splice(h,1)[0];
  objs.forEach(o=>{p.hand=p.hand.filter(x=>x!==o);const i=p.field.indexOf(o);if(i>=0)p.field[i]=null;p.grave.push(o)});
  const i=p.field.indexOf(null);p.field[i]={id:v.id,u:v.u,pos:'a',fd:false,atkd:false,moved:false,t:G.n};
  G.fresh=v.u;G.sel=null;msg(`¡Invocación Especial de ${nm(v)}!`);snd(120,.5,'sawtooth');ui()}
function flipFx(pi,m,summoned){const k=cd(m).k;
  if(k=='mask')msg('Máscara de la Oscuridad: no hay Trampas en tu Cementerio.');
  if(k=='sig'&&summoned){msg('Pájaro Sigiloso: 1000 de daño al rival.');lp(1-pi,-1000)}
  if(k=='ojo'){const n=Math.min(5,P(pi).deck.length);if(n>1){G.mode={k:'peek',pi,cards:P(pi).deck.slice(-n).reverse(),ord:[]};G.sel=null}}}
function setFD(i){const m=me().field[i];if(m.fdt||m.atkd||G.phase=='battle')return say('Ya lo usaste este turno.');
  m.fd=true;m.pos='d';m.fdt=true;msg(`${nm(m)} se pone boca abajo.`);snd(300);ui()}
function endBattle(){me().field.forEach(m=>{if(m&&m.gob){m.gob=false;m.pos='d';m.stuck=2;msg(`${nm(m)} pasa a defensa tras atacar.`)}})}
function changePos(i){
  const m=me().field[i];
  if(G.phase=='battle'||m.t===G.n||m.moved||m.atkd)return say('Ese monstruo no puede cambiar de posición ahora.');
  if(m.stuck)return say(`${nm(m)} no puede cambiar de posición hasta el final de tu próximo turno.`);
  if(m.fd){const pup=pups();m.fd=false;m.pos='a';msg(`Invocación de Volteo: ${nm(m)}.`);titi(pup);flipFx(G.turn,m,true)}
  else{m.pos=m.pos=='a'?'d':'a';msg(`${nm(m)} pasa a ${m.pos=='a'?'ataque':'defensa'}.`);
    if(m.id==23&&m.pos=='d'&&op().field.some(Boolean)){G.mode={k:'clown'};G.sel=null}
    if(m.id==67&&m.pos=='d'){shuffle(me().deck);msg('Sabiduría Manchada: barajás tu Deck.')}}
  m.moved=true;snd(330);ui()}
function startAtk(i){
  const m=me().field[i];
  if(G.phase!='battle'||m.pos!='a'||m.fd||m.atkd)return say('Ese monstruo no puede atacar.');
  if(!op().field.some(Boolean))return attack(i,null);
  G.mode={k:'atk',i};G.sel=null;ui()}
function attack(i,ti){
  const pi=G.turn,oi=1-pi,m=me().field[i],D=op();
  if(ti!=null){const t=D.field[ti],g=D.field.find(x=>x&&x.id==15&&!x.fd);
    if(g&&t!==g&&!t.fd&&cd(t).ra=='Lanza Conjuros'){G.mode=null;say('Valquiria del Mago protege a los demás Lanza Conjuros.');return ui()}}
  G.mode=null;G.sel=null;m.atkd=true;if(cd(m).k=='gob')m.gob=true;const a=atk(pi,m);snd(520,.15);
  if(ti==null)hit(oi,a,m,`${nm(m)} ataca directo.`);
  else{const t=D.field[ti];if(t.fd){t.fd=false;msg(`Se revela ${nm(t)}.`);flipFx(oi,t,false)}
    if(t.pos=='a'){const x=a-atk(oi,t);
      if(x>0){kill(oi,ti,m);hit(oi,x,m,`${nm(m)} destruye a ${nm(t)}.`)}
      else if(x<0){kill(pi,i);hit(pi,-x,null,`${nm(m)} cae ante ${nm(t)}.`)}
      else{kill(oi,ti);kill(pi,i);msg('Ambos monstruos son destruidos.')}}
    else{const x=a-cd(t).d;
      if(x>0){kill(oi,ti,m);msg(`${nm(m)} destruye a ${nm(t)} en defensa.`)}
      else if(x<0)hit(pi,-x,null,`El ataque rebota, ${nm(t)} resiste.`);
      else msg(`${nm(t)} resiste sin daño.`)}}
  ui()}
function nextPhase(){
  if(busy()||G.mode)return;
  if(G.phase=='main'){if(G.n===1){G.phase='main2';msg('Primer turno: sin batalla.')}else{G.phase='battle';msg('Fase de Batalla.')}}
  else if(G.phase=='battle'){G.phase='main2';msg('Fase Principal 2.');endBattle()}
  G.sel=null;ui()}
function endTurn(){
  if(busy())return;
  if(me().hand.length>HLIM){G.mode={k:'disc'};G.sel=null;return ui()}
  if(G.phase=='battle')endBattle();me().field.forEach(m=>m&&m.stuck&&m.stuck--);
  G.turn=1-G.turn;G.n++;G.phase='main';G.summoned=false;G.sel=null;G.mode=null;
  me().field.forEach(m=>m&&(m.atkd=false,m.moved=false,m.fdt=false));
  draw(G.turn);msg(`Turno ${G.n}: Jugador ${G.turn+1}.`);G.curtain=true;snd(520);ui()}
function discard(i){const p=me();p.grave.push(p.hand.splice(i,1)[0]);if(p.hand.length<=HLIM){G.mode=null;endTurn()}else ui()}
function zoneClick(sd,i){
  if(busy())return;const pi=sd=='b'?G.turn:1-G.turn,m=P(pi).field[i],k=G.mode&&G.mode.k;
  if(k=='trib'&&pi==G.turn&&m){const s=G.mode.sel,j=s.indexOf(i);j>=0?s.splice(j,1):s.push(i);
    if(s.length==G.mode.nd)return place(G.mode.h,G.mode.pos,s);return ui()}
  if(k=='clown'&&pi!=G.turn&&m){G.mode=null;msg(`Payaso del Sueño destruye a ${nm(m)}.`);kill(pi,i);snd(200,.3,'sawtooth');return ui()}
  if(k=='atk'&&pi!=G.turn&&m)return attack(G.mode.i,i);
  if(!m&&pi==G.turn&&!k&&G.phase!='battle'&&G.sel&&G.sel.z=='h'){const c=me().hand[G.sel.i];if(c&&!(c.id in SP))return summon(G.sel.i,'a',i)}
  G.sel=m?{z:'f',pi,i}:null;G.mode=k=='disc'?G.mode:null;ui()}

// ===== Interfaz =====
const TOL=10,LPMS=400,pIdx=sd=>sd=='b'?G.turn:1-G.turn;
function buildBoard(){
  const B=$('#board');B.innerHTML='';
  const cell=(c,r,col)=>{const z=el('div','z '+c);z.style.gridArea=r+'/'+col;B.append(z);return z};
  ['t','b'].forEach(sd=>{const t=sd=='t',s=Z[sd]={m:[]},rm=t?2:4,rs=t?1:5;
    for(let i=0;i<SLOTS;i++){const z=cell('mz '+sd,rm,i+2);press(z,()=>zcard(sd,i),()=>zoneClick(sd,i));s.m.push(z);cell('sz '+sd,rs,i+2)}
    s.gy=cell('u gy '+sd,rm,t?1:7);s.dk=cell('u dk '+sd,rs,t?1:7);cell('u fs '+sd,rm,t?7:1);cell('u ed '+sd,rs,t?7:1);
    press(s.gy,()=>topGrave(sd),()=>openGy(sd))});
  cell('xz',3,3);cell('xz',3,5);
  const pc=(ar,...n)=>{const d=el('div','pc');d.style.gridArea=ar;d.append(...n);B.append(d)};
  pc('3/1/4/3',$('#chips'));pc('3/6/4/8',$('#nextBtn'),$('#endBtn'))}
function zcard(sd,i){const pi=pIdx(sd),m=P(pi).field[i];return m&&(!m.fd||pi==G.turn)?{c:m,pi,f:true}:null}
function topGrave(sd){const pi=pIdx(sd),g=P(pi).grave;return g.length?{c:g[g.length-1],pi,f:false}:null}
function openGy(sd){const pi=pIdx(sd),g=P(pi).grave,v=$('#gyv');
  v.innerHTML=`<h3>Cementerio del Jugador ${pi+1} (${g.length})</h3><div class="g"></div><p><button>Cerrar</button></p>`;
  g.forEach(c=>{const w=el('div','gc',`<img src="${img(c.id)}">`);press(w,()=>({c,pi,f:false}),()=>{});$('.g',v).append(w)});
  $('button',v).onclick=()=>v.hidden=true;v.hidden=false}
function showZoom(o){const c=cd(o.c),a=o.f?atk(o.pi,o.c):c.a,z=$('#zoom');
  z.innerHTML=`<img src="${big(o.c.id)}"><div class="zt"><h2>${c.n}</h2><p class="mt">${c.at} · ${c.ra}${o.f&&o.c.fd?' · Boca abajo':''}</p><div class="lv">${'★'.repeat(c.lv)}</div><div class="sx"><span>ATK<b>${a}</b></span><span>DEF<b>${c.d}</b></span><span>NIVEL<b>${c.lv}</b></span></div><p class="fx">${c.x||'Monstruo Normal, sin efecto.'}</p></div>`;
  z.hidden=false;void z.offsetWidth;z.classList.add('on')}
function hideZoom(){const z=$('#zoom');z.classList.remove('on');setTimeout(()=>{if(!z.classList.contains('on'))z.hidden=true},260)}
const canDrag=h=>!busy()&&G.phase!='battle'&&!G.mode&&me().hand[h]&&!(me().hand[h].id in SP);
// Toque corto = tap, 400 ms quieto = vista de lectura, mover = arrastrar (mano o constructor)
function press(e,get,tap,hi,dz,sc){
  e.onpointerdown=ev=>{if(ev.button>0)return;ev.preventDefault();
    const x0=ev.clientX,y0=ev.clientY;let lp=false,mv=false,gh=null,over=null,lx=x0,ly=y0,py=y0,armed=!dz;
    try{e.setPointerCapture(ev.pointerId)}catch(x){}
    e.classList.add('lift');
    const t=setTimeout(()=>{const o=get();if(o){lp=true;showZoom(o)}},LPMS),ta=dz&&setTimeout(()=>armed=true,160);
    e.onpointermove=m=>{lx=m.clientX;ly=m.clientY;
      if(lp)return;
      if(!mv&&Math.hypot(lx-x0,ly-y0)>TOL){mv=true;clearTimeout(t);
        if(armed&&(dz||(hi!=null&&canDrag(hi)))){gh=el('img','ghost');gh.src=dz?img(get().c.id):img(me().hand[hi].id);document.body.append(gh);e.classList.remove('lift')}}
      if(mv&&!gh&&sc){e.parentElement.scrollTop+=py-ly}
      py=ly;
      if(gh){gh.style.left=lx+'px';gh.style.top=ly+'px';
        const u=document.elementFromPoint(lx,ly);
        if(dz)$(dz[0]).classList.toggle('active',!!(u&&u.closest(dz[0])));
        else{const zz=u&&u.closest('.mz.b');if(over&&over!==zz)over.classList.remove('active');over=zz&&!zz.classList.contains('has')?zz:null;if(over)over.classList.add('active')}}};
    const end=ok=>{clearTimeout(t);clearTimeout(ta);e.onpointermove=e.onpointerup=e.onpointercancel=null;e.classList.remove('lift');hideZoom();
      if(gh){gh.remove();
        if(dz){$(dz[0]).classList.remove('active');if(ok){const u=document.elementFromPoint(lx,ly);if(u&&u.closest(dz[0]))dz[1]()}}
        else if(over){over.classList.remove('active');if(ok)summon(hi,'a',Z.b.m.indexOf(over))}
        return}
      if(ok&&!lp&&!mv)tap()};
    e.onpointerup=()=>end(true);e.onpointercancel=()=>end(false)}}
function tapHand(i){if(busy())return;if(G.mode&&G.mode.k=='disc')return discard(i);
  G.mode=null;G.sel=G.sel&&G.sel.z=='h'&&G.sel.i==i?null:{z:'h',i};ui()}
function tween(e,pi,to){const from=shown[pi],t0=performance.now();shown[pi]=to;
  (function f(t){const k=Math.min(1,(t-t0)/500);e.textContent=Math.round(from+(to-from)*k)+' LP';if(k<1)requestAnimationFrame(f)})(t0)}
function hud(id,pi){const p=P(pi),h=$(id);$('.nm',h).textContent='Jugador '+(pi+1);$('.lpb i',h).style.width=Math.min(100,p.lp/LP0*100)+'%';
  const l=$('.lpb span',h);shown[pi]!==p.lp?tween(l,pi,p.lp):l.textContent=p.lp+' LP'}

function zones(sd,pi){const p=P(pi),s=Z[sd],k=G.mode&&G.mode.k,mine=pi==G.turn,S=G.sel,
  hc=mine&&S&&S.z=='h'&&me().hand[S.i],vm=hc&&!(hc.id in SP)&&G.phase!='battle'&&!G.summoned&&!G.mode;
  p.field.forEach((m,i)=>{let c='z mz '+sd;
    if(m){c+=' has';if(S&&S.z=='f'&&S.pi==pi&&S.i==i)c+=' sel';if((k=='atk'||k=='clown')&&!mine)c+=' tgt';
      if(k=='trib'&&mine)c+=G.mode.sel.includes(i)?' on':' trb';if(m.u==G.fresh)c+=' new'}
    else if(vm&&mine)c+=' valid';
    s.m[i].className=c;s.m[i].innerHTML=m?`<img class="${m.pos=='d'?'def':''}" src="${m.fd?BACK:img(m.id)}">`:''});
  const g=p.grave[p.grave.length-1];
  s.gy.className='z u gy '+sd+(g?' has':'');s.gy.innerHTML=g?`<img src="${img(g.id)}"><span class="cnt">${p.grave.length}</span>`:'';
  s.dk.className='z u dk '+sd+(p.deck.length?' has':'');s.dk.innerHTML=p.deck.length?`<img src="${BACK}"><span class="cnt">${p.deck.length}</span>`:''}
function hand(){const b=$('#hand'),n=me().hand.length,cw=Z.b.m[0].offsetWidth||40,hw=cw*1.9,w=b.clientWidth||cw*7,st=n>1?Math.min(hw*.62,(w-hw)/(n-1)):0;
  b.style.setProperty('--hw',hw+'px');b.innerHTML='';
  me().hand.forEach((c,i)=>{const k=i-(n-1)/2,e=el('div','hc'+(G.sel&&G.sel.z=='h'&&G.sel.i==i?' sel':''));
    e.style.cssText=`left:${w/2-hw/2+k*st}px;--r:${k*(n>6?3.5:5)}deg;--y:${k*k*(n>6?1.6:2.4)}px;z-index:${i}`;
    e.innerHTML=`<img src="${img(c.id)}" draggable="false">`;
    press(e,()=>({c,pi:G.turn,f:false}),()=>tapHand(i),i);b.append(e)})}
function acts(){const b=$('#acts');b.innerHTML='';const add=(t,f,c)=>{const x=el('button',c,t);x.onclick=f;b.append(x)};
  if(busy())return;const m=G.mode&&G.mode.k;
  if(m&&m!='disc'&&m!='peek')return add('Cancelar',()=>{G.mode=null;ui()},'r');
  const s=G.sel;if(!s||m)return;const c=s.z=='h'?me().hand[s.i]:me().field[s.i];if(!c)return;
  const main=G.phase!='battle';
  if(s.z=='h'&&main){if(c.id in SP)add('Invocación Especial',()=>special(s.i));else{add('Invocar',()=>summon(s.i,'a'));add('Colocar',()=>summon(s.i,'s'))}}
  else if(s.z=='f'&&s.pi==G.turn){if(main&&cd(c).k=='sig'&&!c.fd)add('Boca abajo',()=>setFD(s.i));if(main)add(c.fd?'Invocar (Volteo)':'Cambiar posición',()=>changePos(s.i));else add('⚔️ Atacar',()=>startAtk(s.i),'r')}}
function render(){
  hud('#hudB',G.turn);hud('#hudT',1-G.turn);zones('b',G.turn);zones('t',1-G.turn);
  $('.oh',$('#hudT')).innerHTML=op().hand.map(()=>`<img src="${BACK}">`).join('');
  const ph=[['main','Principal'],['battle','Batalla'],['main2','Principal 2']];
  $('#chips').innerHTML=`<b>Turno ${G.n}</b>`+ph.map(([k,l])=>`<b class="${G.phase==k?'on':''}">${l}</b>`).join('');
  const nb=$('#nextBtn');nb.textContent=G.phase=='main'?(G.n===1?'Sin batalla':'Batalla'):'Fase 2';nb.disabled=!!(busy()||G.mode||G.phase=='main2');
  $('#endBtn').disabled=!!(busy()||(G.mode&&G.mode.k!='disc'));
  $('#logPanel ol').innerHTML=G.log.map(l=>`<li>${l}</li>`).join('');
  const k=G.mode&&G.mode.k,ht=k=='trib'?`Elegí ${G.mode.nd-G.mode.sel.length} tributo(s) de tu campo`:k=='atk'?'Elegí un objetivo rival':k=='clown'?'Payaso del Sueño: elegí un monstruo rival':k=='disc'?`Descartá ${me().hand.length-HLIM} carta(s) de tu mano`:'';
  $('#hint').textContent=ht;$('#hint').hidden=!ht;
  hand();acts();
  const gv=$('#gyv');
  if(G.mode&&G.mode.k=='peek'){const M=G.mode;gv.dataset.pk=1;
    gv.innerHTML=`<h3>Jugador ${M.pi+1} · Gran Ojo: tocá las cartas en el orden que querés (la primera queda arriba)</h3><div class="g"></div>`;
    M.cards.forEach((c,i)=>{const on=M.ord.indexOf(i),w=el('div','gc',`<img src="${img(c.id)}">${on>=0?`<span class="cnt">${on+1}</span>`:''}`);
      press(w,()=>({c,pi:M.pi,f:false}),()=>{if(M.ord.includes(i))return;M.ord.push(i);
        if(M.ord.length==M.cards.length){const p=P(M.pi),n=M.cards.length;p.deck.splice(p.deck.length-n,n,...M.ord.map(j=>M.cards[j]).reverse());G.mode=null;msg('Gran Ojo: reordenaste el tope del Deck.')}ui()});$('.g',gv).append(w)});
    gv.hidden=false}
  else if(gv.dataset.pk){gv.hidden=true;delete gv.dataset.pk}
  const c=$('#curtain');c.hidden=!busy();
  if(G.over){c.innerHTML=`<div><h2>🏆 Gana el Jugador ${G.over.w+1}</h2><p>${G.over.why}</p><button>Nueva partida</button></div>`;$('button',c).onclick=newGame}
  else if(G.curtain){c.innerHTML=`<div><h2>Turno del Jugador ${G.turn+1}</h2><p>Turno ${G.n}. Pasale el celular y tocá para ver tu mano.</p><button>Continuar</button></div>`;$('button',c).onclick=()=>{G.curtain=false;ui()}}}
const save=()=>{try{localStorage.setItem(KEY,JSON.stringify(G))}catch(e){}};
function ui(){save();render()}

// ===== Menú y constructor de mazos =====
const norm=t=>t.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');
function randomDeck(n=40){const d=[],ok=C.filter(c=>c.k!='fus').map(c=>c.id);
  while(d.length<n){const id=ok[Math.random()*ok.length|0];if(d.filter(x=>x==id).length<3)d.push(id)}return d.sort((a,b)=>a-b)}
function loadDecks(){let d;try{d=JSON.parse(localStorage.getItem('duel-decks-v1'))}catch(e){}
  DK=[0,1].map(i=>d&&Array.isArray(d[i])&&d[i].length&&d[i].every(x=>C[x-1]&&C[x-1].k!='fus')?d[i]:randomDeck())}
const saveDecks=()=>{try{localStorage.setItem('duel-decks-v1',JSON.stringify(DK))}catch(e){}};
function showMenu(){$('#builder').hidden=true;$('#menu').hidden=false;$('#bCont').hidden=!SAVED;
  $('#mi').textContent=`Jugador 1: ${DK[0].length} cartas · Jugador 2: ${DK[1].length} cartas`}
function startDuel(){const bad=DK.findIndex(d=>d.length<40||d.length>60);
  if(bad>=0){say(`El mazo del Jugador ${bad+1} debe tener entre 40 y 60 cartas.`);return openBuilder(bad)}
  $('#menu').hidden=true;SAVED=null;newGame()}
let BD=[],BI=0;
const cnt=id=>BD.filter(x=>x==id).length;
function openBuilder(pi){BI=pi;BD=[...DK[pi]].sort((a,b)=>a-b);$('#menu').hidden=true;$('#builder').hidden=false;
  $('#bT').textContent=`Mazo del Jugador ${pi+1}`;$('#q').value='';$('#flt').value='';drawB()}
function addC(id){const c=C[id-1];
  if(c.k=='fus')return say('Carta de Fusión: necesita Polimerización (llega en la próxima tanda).');
  if(cnt(id)>=3)return say('Solo puede haber 3 copias de la misma carta.');
  if(BD.length>=60)return say('El mazo ya tiene 60 cartas.');
  BD.push(id);BD.sort((a,b)=>a-b);snd(600,.06);drawB()}
function delC(i){BD.splice(i,1);snd(300,.06);drawB()}
function tile(id,tap,dz,n){const w=el('div','tile'+(n>=3?' full':''),`<img loading="lazy" src="${img(id)}">${n?`<span class="cnt">${n}/3</span>`:''}`);
  press(w,()=>({c:{id},pi:0,f:false}),tap,null,dz,true);return w}
function drawB(){
  $('#bC').textContent=`${BD.length}/60 · mín. 40`;
  $('#dk').replaceChildren(...BD.map((id,i)=>tile(id,()=>delC(i))));
  const q=norm($('#q').value),f=$('#flt').value;
  $('#col').replaceChildren(...C.filter(c=>(!q||norm(c.n).includes(q))&&(!f||(f=='n'?!c.x:f=='e'?c.x&&c.k!='fus':c.k=='fus')))
    .map(c=>tile(c.id,()=>addC(c.id),['#dk',()=>addC(c.id)],cnt(c.id))))}

// ===== Inicio =====
$('#bPlay').onclick=startDuel;
$('#bCont').onclick=()=>{G=SAVED;SAVED=null;G.curtain=true;uid=1e6;shown=[P(0).lp,P(1).lp];$('#menu').hidden=true;render()};
$('#bD1').onclick=()=>openBuilder(0);$('#bD2').onclick=()=>openBuilder(1);
$('#bRnd').onclick=()=>{BD=randomDeck();drawB()};$('#bClr').onclick=()=>{BD=[];drawB()};
$('#bOk').onclick=()=>{DK[BI]=[...BD];saveDecks();showMenu()};$('#bNo').onclick=showMenu;
$('#q').oninput=$('#flt').onchange=drawB;
$('#nextBtn').onclick=nextPhase;$('#endBtn').onclick=endTurn;
$('#logBtn').onclick=()=>$('#logPanel').toggleAttribute('hidden');
$('#muteBtn').onclick=e=>{mute=!mute;e.target.textContent=mute?'🔇':'🔊'};
$('#restartBtn').onclick=()=>{if(G&&!G.over)try{SAVED=JSON.parse(JSON.stringify(G))}catch(e){}showMenu()};
document.addEventListener('contextmenu',e=>e.preventDefault());
buildBoard();loadDecks();
(function init(){let s;try{s=JSON.parse(localStorage.getItem(KEY))}catch(e){}
  SAVED=s&&s.p&&!s.over&&s.p[0].ban?s:null;showMenu()})();
window.addEventListener('resize',()=>G&&hand());
