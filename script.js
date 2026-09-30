'use strict';
const LP0=8000,HAND0=5,SLOTS=5,HLIM=6,KEY='duel-simple-v2';
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
['El Ladrón Fantasma Encantador','Oscuridad','Lanza Conjuros',3,700,700]];
const C=D.map(([n,at,ra,lv,a,d,k,x],i)=>({id:i+1,n,at,ra,lv,a,d,k,x}));
const img=id=>`assets/cards/${String(id).padStart(2,'0')}.jpg`,BACK='assets/back.png';

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
const mkDeck=()=>shuffle(C.map(c=>({id:c.id,u:++uid})));

// ===== Reglas =====
function newGame(){
  G={p:[0,1].map(()=>({lp:LP0,deck:mkDeck(),hand:[],field:Array(SLOTS).fill(null),grave:[]})),turn:0,n:1,phase:'main',summoned:false,sel:null,mode:null,msg:'',log:[],over:null,fresh:0,curtain:true};
  shown=[LP0,LP0];draw(0,HAND0);draw(1,HAND0);msg('¡Comienza el duelo! El Jugador 1 empieza (sin batalla en el primer turno).');ui()}
function draw(pi,n=1){const p=P(pi);for(let i=0;i<n;i++){if(!p.deck.length)return win(1-pi,`El Jugador ${pi+1} no puede robar.`);p.hand.push(p.deck.pop())}}
function say(t){G.msg=t;const d=el('div','toast',t);document.body.append(d);setTimeout(()=>d.remove(),2400)}
function msg(t){G.log.unshift(`T${G.n}: ${t}`);G.log.length=Math.min(G.log.length,60);say(t)}
function win(w,why){if(G.over)return;G.over={w,why};msg(`Gana el Jugador ${w+1}. ${why}`);snd(880,.5)}
function lp(pi,d){const p=P(pi);p.lp=Math.max(0,p.lp+d);fx(pi,d);if(!p.lp)win(1-pi,`El Jugador ${pi+1} llegó a 0 LP.`)}
function fx(pi,d){const h=$(pi===G.turn?'#hudB':'#hudT'),f=el('div','fl '+(d<0?'neg':'pos'),(d>0?'+':'')+d);h.append(f);setTimeout(()=>f.remove(),1200);
  if(d<0){$('#mat').classList.remove('shake');void $('#mat').offsetWidth;$('#mat').classList.add('shake');snd(200,.25,'sawtooth')}else snd(700)}
function kill(pi,i,by){const p=P(pi),m=p.field[i];p.field[i]=null;p.grave.push(m);
  if(by&&by.id==1){msg('Des Volstgalph inflige 500 de daño extra.');lp(pi,-500)}}
function hit(pi,d,by,t){lp(pi,-d);msg(`${t} ${d} de daño.`);
  if(by&&by.id==19&&P(pi).hand.length&&!G.over){const p=P(pi),r=p.hand.splice(Math.random()*p.hand.length|0,1)[0];p.grave.push(r);msg(`Sombrero Mágico Blanco: el rival descarta ${nm(r)}.`)}}

function summon(h,pos){
  if(busy()||G.phase=='battle')return;
  const c=cd(me().hand[h]);
  if(c.k=='valk')return say('Valkyrion solo se Invoca de Modo Especial.');
  if(G.summoned)return say('Ya hiciste tu Invocación Normal o Colocación este turno.');
  const nd=need(c.lv),fr=me().field.filter(Boolean).length;
  if(nd>fr)return say(`Necesitás ${nd} monstruo(s) en tu campo para tributar.`);
  if(!nd&&fr>=SLOTS)return say('Tu campo está lleno.');
  if(nd){G.mode={k:'trib',h,pos,nd,sel:[]};G.sel=null;return ui()}
  place(h,pos,[])}
function place(h,pos,tr){const p=me(),c=p.hand.splice(h,1)[0];
  tr.forEach(i=>{p.grave.push(p.field[i]);p.field[i]=null});
  const i=p.field.indexOf(null);
  p.field[i]={id:c.id,u:c.u,pos:pos=='a'?'a':'d',fd:pos=='s',atkd:false,moved:false,t:G.n};
  G.summoned=true;G.fresh=c.u;G.mode=null;G.sel={z:'f',pi:G.turn,i};snd(440);
  msg(`Jugador ${G.turn+1} ${pos=='a'?'invoca a '+C[c.id-1].n+(tr.length?' (tributo)':''):'coloca un monstruo boca abajo'}.`);ui()}
function specialValk(h){
  const p=me(),names=['Alpha el Guerrero Magnético','Beta el Guerrero Magnético','Gamma el Guerrero Magnético'],objs=[];
  for(const n of names){const o=p.hand.find((c,i)=>i!==h&&nm(c)==n&&!objs.includes(c))||p.field.find(m=>m&&nm(m)==n&&!objs.includes(m));
    if(!o)return say('Requiere sacrificar Alpha, Beta y Gamma. Gamma no está en este mazo.');objs.push(o)}
  if(!p.field.includes(null)&&!objs.some(o=>p.field.includes(o)))return say('Tu campo está lleno.');
  const v=p.hand.splice(h,1)[0];
  objs.forEach(o=>{p.hand=p.hand.filter(x=>x!==o);const i=p.field.indexOf(o);if(i>=0)p.field[i]=null;p.grave.push(o)});
  const i=p.field.indexOf(null);p.field[i]={id:v.id,u:v.u,pos:'a',fd:false,atkd:false,moved:false,t:G.n};
  G.fresh=v.u;G.sel=null;msg('¡Invocación Especial de Valkyrion el Guerrero Magno!');snd(120,.5,'sawtooth');ui()}
function changePos(i){
  const m=me().field[i];
  if(G.phase=='battle'||m.t===G.n||m.moved||m.atkd)return say('Ese monstruo no puede cambiar de posición ahora.');
  if(m.fd){m.fd=false;m.pos='a';msg(`Invocación de Volteo: ${nm(m)}.`);if(cd(m).k=='mask')msg('Máscara de la Oscuridad: no hay Trampas en tu Cementerio.')}
  else{m.pos=m.pos=='a'?'d':'a';msg(`${nm(m)} pasa a ${m.pos=='a'?'ataque':'defensa'}.`);
    if(m.id==23&&m.pos=='d'&&op().field.some(Boolean)){G.mode={k:'clown'};G.sel=null}}
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
  G.mode=null;G.sel=null;m.atkd=true;const a=atk(pi,m);snd(520,.15);
  if(ti==null)hit(oi,a,m,`${nm(m)} ataca directo.`);
  else{const t=D.field[ti];if(t.fd){t.fd=false;msg(`Se revela ${nm(t)}.`);if(cd(t).k=='mask')msg('Máscara de la Oscuridad: VOLTEO sin Trampas en el Cementerio.')}
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
  else if(G.phase=='battle'){G.phase='main2';msg('Fase Principal 2.')}
  G.sel=null;ui()}
function endTurn(){
  if(busy())return;
  if(me().hand.length>HLIM){G.mode={k:'disc'};G.sel=null;return ui()}
  G.turn=1-G.turn;G.n++;G.phase='main';G.summoned=false;G.sel=null;G.mode=null;
  me().field.forEach(m=>m&&(m.atkd=false,m.moved=false));
  draw(G.turn);msg(`Turno ${G.n}: Jugador ${G.turn+1}.`);G.curtain=true;snd(520);ui()}
function discard(i){const p=me();p.grave.push(p.hand.splice(i,1)[0]);if(p.hand.length<=HLIM){G.mode=null;endTurn()}else ui()}
function zoneClick(sd,i){
  if(busy())return;const pi=sd=='b'?G.turn:1-G.turn,m=P(pi).field[i],k=G.mode&&G.mode.k;
  if(k=='trib'&&pi==G.turn&&m){const s=G.mode.sel,j=s.indexOf(i);j>=0?s.splice(j,1):s.push(i);
    if(s.length==G.mode.nd)return place(G.mode.h,G.mode.pos,s);return ui()}
  if(k=='clown'&&pi!=G.turn&&m){G.mode=null;msg(`Payaso del Sueño destruye a ${nm(m)}.`);kill(pi,i);snd(200,.3,'sawtooth');return ui()}
  if(k=='atk'&&pi!=G.turn&&m)return attack(G.mode.i,i);
  G.sel=m?{z:'f',pi,i}:null;G.mode=k=='disc'?G.mode:null;ui()}

// ===== Interfaz =====
function buildMat(){
  const MW=552,MH=391,CW=46,CH=62,mat=$('#mat');
  const pos=([x,y],f)=>{if(f){x=MW-x;y=MH-y}return`left:${(x-CW/2)/MW*100}%;top:${(y-CH/2)/MH*100}%;width:${CW/MW*100}%;height:${CH/MH*100}%`};
  ['b','t'].forEach(sd=>{const f=sd=='t',s=Z[sd]={m:[]};
    [180,230,280,330,380].forEach((x,i)=>{const z=el('div','z '+sd);z.style.cssText=pos([x,287],f);z.onclick=()=>zoneClick(sd,i);mat.append(z);s.m.push(z)});
    s.deck=el('div','z '+sd);s.deck.style.cssText=pos([430,352],f);mat.append(s.deck);
    s.gy=el('div','z '+sd);s.gy.style.cssText=pos([472,287],f);s.gy.onclick=()=>openGy(sd);mat.append(s.gy)})}
function openGy(sd){const pi=sd=='b'?G.turn:1-G.turn,g=P(pi).grave,v=$('#gyv');
  v.innerHTML=`<h3>Cementerio del Jugador ${pi+1} (${g.length})</h3><div class="g"></div><p><button>Cerrar</button></p>`;
  g.forEach((c,i)=>{const im=el('img');im.src=img(c.id);im.onclick=()=>{G.sel={z:'g',pi,i};v.hidden=true;ui()};$('.g',v).append(im)});
  $('button',v).onclick=()=>v.hidden=true;v.hidden=false}
function selCard(){const s=G.sel;if(!s)return null;
  if(s.z=='h'){const c=me().hand[s.i];return c&&{c,pi:G.turn}}
  if(s.z=='f'){const c=P(s.pi).field[s.i];return c&&{c,pi:s.pi,fd:c.fd&&s.pi!=G.turn}}
  const c=P(s.pi).grave[s.i];return c&&{c,pi:s.pi}}
function tween(e,pi,to){const from=shown[pi],t0=performance.now();shown[pi]=to;
  (function f(t){const k=Math.min(1,(t-t0)/500);e.textContent=Math.round(from+(to-from)*k)+' LP';if(k<1)requestAnimationFrame(f)})(t0)}
function hud(id,pi){const p=P(pi),h=$(id);$('.nm',h).textContent='Jugador '+(pi+1);$('.lpb i',h).style.width=Math.min(100,p.lp/LP0*100)+'%';
  const l=$('.lpb span',h);shown[pi]!==p.lp?tween(l,pi,p.lp):l.textContent=p.lp+' LP'}
function zones(sd,pi){const p=P(pi),s=Z[sd],k=G.mode&&G.mode.k;
  p.field.forEach((m,i)=>{const z=s.m[i];let c='z '+sd;
    if(m){if(G.sel&&G.sel.z=='f'&&G.sel.pi==pi&&G.sel.i==i)c+=' sel';
      if(k=='atk'&&pi!=G.turn||k=='clown'&&pi!=G.turn)c+=' tgt';
      if(k=='trib'&&pi==G.turn)c+=G.mode.sel.includes(i)?' on':' trb';
      if(m.u==G.fresh)c+=' new'}
    z.className=c;z.innerHTML=m?`<img class="${m.pos=='d'?'def':''}" src="${m.fd?BACK:img(m.id)}">`:''});
  s.deck.innerHTML=p.deck.length?`<img src="${BACK}"><span class="cnt">${p.deck.length}</span>`:'';
  const g=p.grave[p.grave.length-1];s.gy.innerHTML=g?`<img src="${img(g.id)}"><span class="cnt">${p.grave.length}</span>`:''}
function hidx(ev){const b=$('#hand'),r=b.getBoundingClientRect(),n=me().hand.length,st=n>1?Math.min(72*.82,(r.width-84)/(n-1)):1;
  return Math.max(0,Math.min(n-1,Math.round((ev.clientX-r.left-r.width/2)/st+(n-1)/2)))}
function hand(){const b=$('#hand'),n=me().hand.length,w=b.clientWidth,st=n>1?Math.min(72*.82,(w-84)/(n-1)):0;b.innerHTML='';
  me().hand.forEach((c,i)=>{const k=i-(n-1)/2,e=el('div','hc'+(G.sel&&G.sel.z=='h'&&G.sel.i==i?' sel':''));
    e.style.cssText=`left:${w/2-36+k*st}px;--r:${k*(n>6?3:4.5)}deg;--y:${k*k*(n>6?2:3)}px;z-index:${i}`;
    e.innerHTML=`<img src="${img(c.id)}" draggable="false">`;b.append(e)})}
function info(){const r=selCard(),m=G.mode&&G.mode.k;let t='',im='',e='',src=BACK,n='Elegí una carta';
  if(m=='trib')e=`Elegí ${G.mode.nd} monstruo(s) tuyo(s) para tributar (${G.mode.sel.length}/${G.mode.nd}).`;
  else if(m=='atk')e='Tocá un monstruo rival para atacar.';
  else if(m=='clown')e='Payaso del Sueño: tocá un monstruo rival para destruirlo.';
  else if(m=='disc')e=`Tenés ${me().hand.length} cartas: tocá una de tu mano para descartarla (máximo ${HLIM}).`;
  else if(r){const c=cd(r.c);
    if(r.fd){n='Monstruo boca abajo';im='Posición de defensa';e='Carta oculta.'}
    else{src=img(r.c.id);n=c.n;const f=G.sel.z=='f',a=f?atk(r.pi,r.c):c.a;
      im=`${c.at} · ${c.ra} · Nivel ${c.lv} · ATK ${a} / DEF ${c.d}`+(f?` · ${r.c.fd?'Boca abajo':r.c.pos=='a'?'Ataque':'Defensa'}`:'');
      e=(c.x?'Efecto: '+c.x:'Monstruo Normal, sin efecto.')+(need(c.lv)&&G.sel.z=='h'?` Requiere ${need(c.lv)} tributo(s).`:'')}}
  else e=G.msg||'Tocá una carta del tablero o deslizá el dedo por tu mano.';
  $('#ic img').src=src;$('#in').textContent=n;$('#im').textContent=im;$('#ie').textContent=e;}
function acts(){const b=$('#acts');b.innerHTML='';const add=(t,f,c)=>{const x=el('button',c,t);x.onclick=f;b.append(x)};
  if(busy())return;const m=G.mode&&G.mode.k;
  if(m&&m!='disc')return add('Cancelar',()=>{G.mode=null;ui()},'r');
  const s=G.sel;if(!s||m||s.z=='g'||(s.z=='f'&&s.pi!=G.turn))return;const c=s.z=='h'?me().hand[s.i]:me().field[s.i];if(!c)return;
  const main=G.phase!='battle';
  if(s.z=='h'&&main){if(cd(c).k=='valk')add('Invocación Especial',()=>specialValk(s.i));else{add('Invocar',()=>summon(s.i,'a'));add('Colocar',()=>summon(s.i,'s'))}}
  else if(s.z=='f'){if(main)add(c.fd?'Invocar (Volteo)':'Cambiar posición',()=>changePos(s.i));else add('⚔️ Atacar',()=>startAtk(s.i),'r')}}
function render(){
  hud('#hudB',G.turn);hud('#hudT',1-G.turn);zones('b',G.turn);zones('t',1-G.turn);
  $('.oh',$('#hudT')).innerHTML=op().hand.map(()=>`<img src="${BACK}">`).join('');
  const ph=[['main','Principal'],['battle','Batalla'],['main2','Principal 2']];
  $('#chips').innerHTML=`<b>T${G.n}</b>`+ph.map(([k,l])=>`<b class="${G.phase==k?'on':''}">${l}</b>`).join('');
  const nb=$('#nextBtn');nb.textContent=G.phase=='main'?(G.n===1?'Sin batalla':'Batalla'):'Fase 2';nb.disabled=!!(busy()||G.mode||G.phase=='main2');
  $('#endBtn').disabled=!!(busy()||(G.mode&&G.mode.k!='disc'));
  $('#logPanel ol').innerHTML=G.log.map(l=>`<li>${l}</li>`).join('');
  hand();info();acts();
  const c=$('#curtain');c.hidden=!busy();
  if(G.over){c.innerHTML=`<div><h2>🏆 Gana el Jugador ${G.over.w+1}</h2><p>${G.over.why}</p><button>Nueva partida</button></div>`;$('button',c).onclick=newGame}
  else if(G.curtain){c.innerHTML=`<div><h2>Turno del Jugador ${G.turn+1}</h2><p>Turno ${G.n}. Pasale el celular y tocá para ver tu mano.</p><button>Continuar</button></div>`;$('button',c).onclick=()=>{G.curtain=false;ui()}}}
const save=()=>{try{localStorage.setItem(KEY,JSON.stringify(G))}catch(e){}};
function ui(){save();render()}

// ===== Inicio =====
let dn=false;const hb=$('#hand');
function scrub(ev){if(busy())return;const n=me().hand.length;if(!n)return;
  if(G.mode&&G.mode.k=='disc')return;const i=hidx(ev);
  if(!G.sel||G.sel.z!='h'||G.sel.i!==i||G.mode){G.mode=null;G.sel={z:'h',i};render()}}
hb.onpointerdown=e=>{if(busy())return;if(G.mode&&G.mode.k=='disc'){discard(hidx(e));return}dn=true;hb.setPointerCapture(e.pointerId);scrub(e)};
hb.onpointermove=e=>dn&&scrub(e);hb.onpointerup=hb.onpointercancel=()=>dn=false;
$('#nextBtn').onclick=nextPhase;$('#endBtn').onclick=endTurn;
$('#logBtn').onclick=()=>$('#logPanel').toggleAttribute('hidden');
$('#muteBtn').onclick=e=>{mute=!mute;e.target.textContent=mute?'🔇':'🔊'};
$('#restartBtn').onclick=()=>{if(confirm('¿Reiniciar la partida?'))newGame()};
$('#ic').onclick=()=>{const s=$('#ic img').src;if(s.includes('cards')){$('#zoom img').src=s;$('#zoom').hidden=false}};
$('#zoom').onclick=()=>$('#zoom').hidden=true;
buildMat();
(function init(){let s;try{s=JSON.parse(localStorage.getItem(KEY))}catch(e){}
  if(s&&s.p&&!s.over&&confirm('Hay una partida guardada. ¿Querés continuarla?')){G=s;G.curtain=true;uid=1e6;shown=[P(0).lp,P(1).lp];render()}else newGame()})();
window.addEventListener('resize',()=>G&&hand());
