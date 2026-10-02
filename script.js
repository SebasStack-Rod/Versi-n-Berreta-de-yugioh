'use strict';
const LP0=8000,HAND0=5,SLOTS=5,HLIM=6,KEY='duel-simple-v5',MAXX=15;
const D=[
['Des Volstgalph','Tierra','Dragón',5,2200,1700,'volst','Cuando esta carta destruye un monstruo en batalla y lo manda al Cementerio, inflige 500 puntos de daño a tu adversario. Gana 200 ATK cada vez que se activa una Carta Mágica Normal o de Juego Rápido, hasta el final del turno (incluso en el turno del rival).'],
['Alas de la Llama Perversa','Fuego','Pyro',2,700,600],
['Máscara de la Oscuridad','Oscuridad','Demonio',2,900,400,'mask','VOLTEO: añadí 1 Carta de Trampa de tu Cementerio a tu mano.'],
['Cortina de los Oscuros','Oscuridad','Lanza Conjuros',2,600,500],
['Espejo de Cambio de Empleo','Oscuridad','Demonio',3,800,1300],
['Alpha el Guerrero Magnético','Tierra','Roca',4,1400,1700],
['Beta el Guerrero Magnético','Tierra','Roca',4,1700,1600],
['Valkyrion el Guerrero Magno','Tierra','Roca',8,3500,3850,'valk','No se Invoca de Modo Normal ni se Coloca. Invocación Especial desde la mano sacrificando Alpha, Beta y Gamma el Guerrero Magnético (mano o Campo).'],
['Espíritu de los Vientos','Viento','Lanza Conjuros',4,1700,1700],
['Kageningen','Tierra','Guerrero',2,800,600],
['Mano de la Invitación','Oscuridad','Zombi',3,700,900],
['Diosa del Tercer Ojo','Luz','Hada',4,1200,1000,'diosa','Podés sustituir esta carta por cualquier Monstruo Material de Fusión. Cuando lo hacés, el/los otro/s Monstruo/s Material debe ser el correcto.'],
['Héroe del Este','Tierra','Guerrero',3,1100,1000],
['Doma, el Ángel del Silencio','Oscuridad','Hada',5,1600,1400],
['Valquiria del Mago','Luz','Lanza Conjuros',4,1600,1800,'valq','Tu rival no puede elegir como objetivo de ataque a otros Lanza Conjuros boca arriba que controles, excepto a esta carta.'],
['Maga Oscura','Luz','Lanza Conjuros',6,2000,1700,'maga','Gana 300 ATK por cada "Mago Oscuro" o "Mago del Caos Negro" en cualquier Cementerio.'],
['Aquello que se Alimenta de Vida','Oscuridad','Demonio',3,1200,1000],
['Gris Oscuro','Tierra','Bestia',3,800,900],
['Sombrero Mágico Blanco','Luz','Lanza Conjuros',3,1000,700,'somb','Si inflige daño de batalla al rival, este descarta 1 carta al azar de su mano.'],
['Jinzo','Oscuridad','Máquina',6,2400,1500,'jinzo','Niega las Cartas de Trampa y sus efectos en el Campo.'],
['Espíritu de los Libros','Viento','Bestia Alada',4,1400,1200],
['Ghoul de las Sombras','Oscuridad','Zombi',4,1600,1300,'ghoul','Gana 100 ATK por cada monstruo en tu Cementerio.'],
['Payaso del Sueño','Tierra','Guerrero',3,1200,900,'payaso','Al cambiar de Posición de Ataque a Defensa, destruye 1 monstruo del Campo rival.'],
['León Durmiente','Tierra','Bestia',3,700,1700],
['Pergamino de Dragón Yamatano','Viento','Dragón',2,900,300],
['Planta Oscura','Oscuridad','Planta',2,300,400],
['Gearfried el Caballero de Hierro','Tierra','Guerrero',4,1800,1600,'gear','Cuando una Carta de Equipo es equipada a esta carta, destruila.'],
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
['Caballero Arma','Agua','Aqua',4,1000,1200],
['Zombi Topo Mecánico','Oscuridad','Zombi',2,500,400],
['Amante Feliz','Luz','Hada',2,800,500],
['Caballero Pingüino','Tierra','Aqua',3,900,800,'pen','Cuando esta carta es mandada directamente de tu Deck al Cementerio por el efecto de una carta que controle tu adversario, combina las cartas de tu Cementerio con tu Deck, barájalas y forma un nuevo Deck.'],
['Pequeño Dragón','Viento','Dragón',2,600,700],
['Dragón Blanco de Ojos Azules','Luz','Dragón',8,3000,2500],
['Duende Místico','Luz','Lanza Conjuros',4,800,2000],
['Gigante Hitotsu-Me','Tierra','Bestia Guerrera',4,1200,1000],
['Bebé Dragón','Viento','Dragón',3,1200,700],
['Ryu-Kishin','Oscuridad','Demonio',3,1000,500],
['Feral Imp','Oscuridad','Demonio',4,1300,1400],
['Dragón Alado, Guardián de la Fortaleza #1','Viento','Dragón',4,1400,1200],
['Hombre Seta','Tierra','Planta',2,800,600],
['Espectro de las Sombras','Oscuridad','Zombi',1,500,200],
['Dragón de Fuego de la Tierra Negra','Oscuridad','Dragón',4,1500,800],
['Brazo Espada del Dragón','Tierra','Dinosaurio',6,1750,2030],
['Guardia del Pantano','Tierra','Guerrero',5,1800,1500,'swamp','Aumenta en 500 el ATK de este monstruo por cada "Guardián de Batalla de Lava" boca arriba en tu Campo.'],
['Tyhone','Viento','Bestia Alada',4,1200,1400],
['Toro de Batalla','Tierra','Bestia Guerrera',5,1800,1300],
['Espadachín Llamas','Fuego','Guerrero',5,1800,1600,'fus','Monstruo de Fusión: "Manipulador de la Llama" + "Masaki el Espadachín Legendario".'],
['Mago del Tiempo','Luz','Lanza Conjuros',2,500,400,'timew','Una vez por turno (tu turno, Fase Principal): lanzá una moneda y elegí cara o cruz. Si acertás, destruí todos los monstruos del rival. Si fallás, destruí todos los tuyos y recibís daño igual a la mitad del ATK total de los destruidos.'],
['Pierna Derecha del Prohibido','Oscuridad','Lanza Conjuros',1,200,300],
['Pierna Izquierda del Prohibido','Oscuridad','Lanza Conjuros',1,200,300],
['Brazo Derecho del Prohibido','Oscuridad','Lanza Conjuros',1,200,300],
['Brazo Izquierdo del Prohibido','Oscuridad','Lanza Conjuros',1,200,300],
['Exodia, el Prohibido','Oscuridad','Lanza Conjuros',3,1000,100,'exodia','Si tenés en la mano esta carta junto con la Pierna Izquierda, Pierna Derecha, Brazo Izquierdo y Brazo Derecho del Prohibido, ganás el Duelo al instante.'],
['Convoca al Craneo','Oscuridad','Demonio',6,2500,1200],
['La malvada Lombriz','Tierra','Bestia',3,1400,700,'worm','Esta carta vuelve a tu mano al final de tu turno.'],
['Sirviente del Craneo','Oscuridad','Zombi',1,300,200],
['Diablillo de Cuerno','Oscuridad','Demonio',4,1300,1000],
['Buey de Batalla','Tierra','Bestia Guerrera',4,1700,100],
['Guerrero Castor','Tierra','Bestia Guerrera',3,1200,1500],
['Ogro de Roca Grotto #1','Tierra','Roca',3,800,1200],
['Guerrero de la Montaña','Tierra','Bestia Guerrera',3,600,1000],
['Zombi Guerrero','Oscuridad','Zombi',3,1200,900,'fus','Monstruo de Fusión: "Sirviente del Craneo" + "Guerrero de Batalla".'],
['Dragon Koumori','Oscuridad','Dragón',4,1500,1200],
['Rey de Dos Cabezas Rex','Tierra','Dinosaurio',4,1600,1200],
['Juez','Oscuridad','Guerrero',6,2200,1500],
['Saggi el Payaso Oscuro','Oscuridad','Lanza Conjuros',3,600,1500],
['Mago Oscuro','Oscuridad','Lanza Conjuros',7,2500,2100],
['Medusa','Oscuridad','Zombi',4,1500,1200],
['Gaia, el Campeón Dragón','Viento','Dragón',7,2600,2100,'fus','Monstruo de Fusión: "Gaia, el Caballero Feroz" + "Maldición de Dragón".'],
['Gaia, el Caballero Feroz','Tierra','Guerrero',7,2300,2100],
['Maldición de Dragón','Oscuridad','Dragón',5,2000,1500],
['Gaitero Dragón','Fuego','Pyro',3,200,1800,'piper','VOLTEO: destruye "Jarra de Captura de Dragones" boca arriba en el Campo y cambia a Posición de Ataque a todos los monstruos Dragón boca arriba del Campo.'],
['Guardia Celta','Tierra','Guerrero',4,1400,1200],
['Arlequín sin Rostro','Oscuridad','Lanza Conjuros',5,1200,2200],
['Guerrero de Karbonala','Tierra','Guerrero',4,1500,1200,'fus','Monstruo de Fusión: "M-Guerrero Nº 1" + "M-Guerrero Nº 2".'],
['Muñeca Pícara','Luz','Lanza Conjuros',4,1600,1200],
['Griffore','Tierra','Bestia',4,1200,1500],
['Torike','Tierra','Bestia',3,1200,600],
['Sangan','Oscuridad','Demonio',3,1000,600,'sangan','Cuando esta carta es mandada del Campo al Cementerio, añadí a tu mano desde tu Deck 1 monstruo con 1500 o menos de ATK.'],
['Gran Insecto','Tierra','Insecto',4,1200,1500],
['Insecto Básico','Tierra','Insecto',2,500,700],
['Reina Insecto','Tierra','Insecto',7,2200,2400,'iqueen','Cada vez que declare un ataque, debés sacrificar 1 monstruo. Gana 200 ATK por cada monstruo Insecto en el Campo. Si destruye un monstruo del rival en batalla, en la End Phase se Invoca de Modo Especial 1 Ficha Insecto (Tierra, Nivel 1, 100/100) en Ataque.'],
['Escarabajo Hércules','Tierra','Insecto',5,1500,2000],
['Aguijon asesino','Viento','Insecto',4,1200,1000],
['Gokibore','Tierra','Insecto',4,1200,1400],
['Pulga Gigante','Tierra','Insecto',4,1500,1200],
['Larva de Polilla','Tierra','Insecto',2,500,400,'larva','No puede ser Invocada de Modo Normal ni Colocada. Solo por Invocación Especial sacrificando a "Petit Moth" en el 2º de tus turnos después de que haya sido equipada con "Capullo Evolutivo".'],
['Gran Polilla','Tierra','Insecto',8,2600,2500,'gmoth','No puede ser Invocada de Modo Normal ni Colocada. Solo por Invocación Especial sacrificando a "Petit Moth" en el 4º de tus turnos después de que haya sido equipada con "Capullo Evolutivo".'],
['Kuriboh','Oscuridad','Demonio',1,300,200,'kuri','Durante el turno del rival, en el cálculo de daño: podés descartar esta carta; no recibís daño de batalla de ese combate (efecto rápido).'],
['Cementerio de Mamuts','Tierra','Dinosaurio',3,1200,800],
['Blanco Gigante','Agua','Pez',4,1600,800],
['Lobo','Tierra','Bestia',3,1200,800],
['Dama Arpía','Viento','Bestia Alada',4,1300,1400],
['Hermanas Arpías','Viento','Bestia Alada',6,1950,2100,'sisters','No puede ser Invocada de Modo Normal ni Colocada. Solo por Invocación Especial mediante el efecto de "Egoísta Elegante".'],
['Hacha del Tigre','Tierra','Bestia Guerrera',4,1300,1100],
['Colmillo de Plata','Tierra','Bestia',3,1200,800],
['Mago Oscuro','Oscuridad','Lanza Conjuros',7,2500,2100],
['Sabio Oscuro','Oscuridad','Lanza Conjuros',9,2800,3200,'sage','No puede ser Invocada de Modo Normal ni Colocada. Solo por Invocación Especial desde tu mano o Deck sacrificando 1 "Mago Oscuro" de tu Campo cuando salga bien el efecto de "Mago del Tiempo". Al invocarla, añadí a tu mano 1 Carta Mágica de tu Deck y barajá.'],
['Kojikocy','Viento','Guerrero',4,1500,1200],
['Gran Polilla Perfecta','Viento','Insecto',8,3500,3000,'pmoth','No puede ser Invocada de Modo Normal ni Colocada. Solo por Invocación Especial sacrificando a "Petit Moth" en el 6º de tus turnos después de que haya sido equipada con "Capullo Evolutivo".'],
['Dragón Milenario','Viento','Dragón',7,2400,2000,'fus','Monstruo de Fusión: "Mago del Tiempo" + "Bebé Dragón".'],
['Kraken Demoniaco','Agua','Aqua',4,1200,1400],
['Malagua','Agua','Aqua',4,1200,1500],
['Capullo Evolutivo','Tierra','Insecto',3,0,2000,'cocoon','Podés equipar esta carta desde tu mano como Carta Mágica de Equipo a un "Petit Moth" boca arriba en el Campo. Si está equipada, el ATK y la DEF del "Capullo Evolutivo" se aplican a ese "Petit Moth".'],
['Kairyu-Shin','Agua','Serpiente Marina',4,1800,1500],
['Soldado Gigante de Piedra','Tierra','Roca',3,1300,2000],
['Planta Come-Hombres','Tierra','Planta',2,800,600],
['Krokodilus','Tierra','Reptil',4,1100,1200],
['Luchador','Agua','Reptil',4,1300,1200],
['Incursor del Hacha','Tierra','Guerrero',4,1700,1150],
['Megazowler','Tierra','Dinosaurio',6,1800,2000],
['Uraby','Tierra','Dinosaurio',4,1500,800],
['Dragon Rastrero #2','Tierra','Dinosaurio',4,1600,1200],
['Dragón Negro de Ojos Rojos','Oscuridad','Dragón',7,2400,2000],
['Castillo de las Ilusiones Oscuras','Oscuridad','Demonio',4,920,1930,'castle','VOLTEO: aumenta 200 el ATK y la DEF de todos los monstruos Zombi del Campo, y los vuelve a aumentar 200 en cada una de tus Standby Phases hasta el 4º turno después de la activación.'],
['Segadora de las Cartas','Oscuridad','Demonio',5,1380,1930,'reaper','VOLTEO: seleccioná 1 Carta de Trampa en el Campo y destrúyela. Si estaba Colocada, mirala: si es Trampa se destruye; si es Mágica, vuelve a su posición original.'],
['Rey de Yamimakai','Oscuridad','Demonio',5,2000,1530],
['Barox','Oscuridad','Demonio',5,1380,1530,'fus','Monstruo de Fusión: "Oso Panda Frenético" + "Ryu-Kishin".'],
['Quimera Oscura','Oscuridad','Demonio',5,1620,1460],
['Guardián de Metal','Oscuridad','Demonio',5,1150,2150],
['Tortuga Catapulta','Agua','Aqua',5,1000,2000,'catap','Una vez por turno (tu Fase Principal): podés sacrificar 1 monstruo tuyo; infligís al rival daño igual a la mitad del ATK del monstruo sacrificado.'],
['Gyakutenno Megami','Luz','Hada',6,1800,2000],
['Jinete Místico','Tierra','Bestia',4,1300,1550],
['Zanki','Tierra','Guerrero',5,1500,1700],
['Dragón Rastrero','Tierra','Dragón',5,1600,1400],
['Payaso Craso','Oscuridad','Demonio',4,1350,1400,'clown2','Cuando esta carta pasa de Posición de Ataque a Defensa, devolvé 1 monstruo del Campo del rival a la mano de su propietario.'],
['Armadura de Zombi','Oscuridad','Zombi',3,1500,0],
['Dragón Zombi','Oscuridad','Zombi',3,1600,0],
['Payaso Zombi','Oscuridad','Zombi',3,1350,0],
['Calabaza Rey de los Fantasmas','Oscuridad','Zombi',7,1800,2000,'pumpk','Mientras "Castillo de las Ilusiones Oscuras" esté boca arriba en el Campo, gana 200 ATK/DEF y otros 100 en cada una de tus Standby Phases, hasta el 4º turno.'],
['Guerrero de Batalla','Tierra','Guerrero',3,700,1000],
['Dragón de Tres Cuernos','Luz','Dragón',8,2850,2350],
['Santuario de Dragones','Magia','Normal',0,0,0,'shrine','Mandá al Cementerio 1 monstruo Dragón de tu Deck. Después, si ese monstruo es un Monstruo Normal Dragón, podés mandar al Cementerio otro monstruo Dragón de tu Deck. Solo podés activar 1 "Santuario de Dragones" por turno.'],
['Rayo Explosivo de la Destrucción','Magia','Normal',0,0,0,'burst','Si controlás un "Dragón Blanco de Ojos Azules", destruí todos los monstruos que controla el rival. Ese Dragón no puede atacar el turno en que activaste esta carta.'],
['Grito Plateado','Magia','Juego Rápido',0,0,0,'silver','Seleccioná 1 monstruo Normal Dragón de tu Cementerio e Invocalo de Modo Especial. Solo podés activar 1 "Grito Plateado" por turno.'],
['Exorcismo','Magia','Normal',0,0,0,'exor','Destruí 1 Carta Mágica en el campo. Si el objetivo está boca abajo, se voltea: si es Mágica se destruye; si no, vuelve boca abajo. La carta volteada no se activa.'],
['Entierro Insensato','Magia','Normal',0,0,0,'burial','Mandá al Cementerio 1 monstruo de tu Deck.'],
['Destrucción Aplastante','Magia','Normal',0,0,0,'crush','Si controlás un monstruo Dragón: seleccioná 1 Carta Mágica/Trampa en el Campo y destruila; si lo hacés, infligís 500 de daño a su controlador.'],
['Cartas de la Consonancia','Magia','Normal',0,0,0,'concord','Descartá 1 monstruo Dragón con 1000 ATK o menos (en este set se acepta cualquier Dragón con esa condición); robá 2 cartas.'],
['Paladín de Dragón Blanco','Luz','Dragón',4,1900,1200,'paladin','Solo se Invoca con "Ritual del Dragón Blanco". Si ataca a un monstruo en Defensa, lo destruye sin cálculo de daño. Una vez por turno podés sacrificarlo para invocar de Modo Especial desde tu mano o Deck 1 "Dragón Blanco de Ojos Azules".'],
['Malicioso Dragón Blanco de Ojos Azules','Oscuridad','Dragón',8,3000,2500,'malic','No puede ser Invocada de Modo Normal ni Colocada. Solo por Invocación Especial retirando del juego 1 "Dragón Blanco de Ojos Azules" de tu Deck. Solo puede haber 1 monstruo "Malicioso" boca arriba. Tus otros monstruos no pueden atacar. Si no hay una Mágica de Campo boca arriba, se destruye.'],
['El Batir de Alas del Dragón Gigante','Magia','Normal',0,0,0,'wings','Devolvé a la mano 1 monstruo Dragón de Nivel 5 o mayor que controlés y, si lo hacés, destruí todas las Cartas Mágicas y de Trampa del Campo.'],
['Dragón Tormentaoscura','Oscuridad','Dragón',8,2700,2500,'stormd','Gemini: mientras esté boca arriba en el Campo o Cementerio se trata como Normal; podés volver a Invocarla (Normal) para que sea de Efecto. Una vez por turno: mandá 1 Mágica/Trampa boca arriba que controlés al Cementerio; destruí todas las Mágicas y Trampas del Campo.'],
['Dragón Toon de Ojos Azules','Luz','Dragón',8,3000,2500,'toonbe','No puede ser Colocada. Solo por Invocación Especial desde tu mano sacrificando 1 monstruo, si controlás "Mundo Toon" boca arriba. Pagá 500 LP para declarar un ataque. Si "Mundo Toon" es destruido, se destruye. Ataca directo salvo que el rival controle monstruos Toon.'],
['Dragón del Génesis','Luz','Dragón',6,2200,1800,'genesis','Una vez por turno: mandá de tu mano al Cementerio 1 monstruo Dragón para añadir a tu mano, desde el Cementerio, otro monstruo Dragón. Si es mandada al Cementerio desde el Campo, devolvé al Deck todos los Dragones de tu Cementerio.'],
['Dragón de Ojos Azules Definitivo','Luz','Dragón',12,4500,3800,'fus','Monstruo de Fusión: 3 "Dragón Blanco de Ojos Azules".'],
['Barranco del Dragón','Magia','Campo',0,0,0,'ravine','Una vez por turno (tu Fase Principal): descartá 1 carta para: añadir a tu mano 1 monstruo "Dracounidad" de Nivel 4 o menos, o mandar al Cementerio desde tu Deck 1 monstruo Dragón.'],
['Renacimiento del Dragón','Trampa','Normal',0,0,0,'rebirth','Seleccioná 1 monstruo Dragón boca arriba que controlés; destierralo e Invocá de Modo Especial, desde tu mano o Cementerio, 1 monstruo Dragón.'],
['Llamado de los Condenados','Trampa','Continua',0,0,0,'calldam','Activá seleccionando 1 monstruo de tu Cementerio; Invocalo de Modo Especial en Posición de Ataque boca arriba. Cuando esta carta deja el Campo, destruí ese monstruo; si el monstruo es destruido, destruí esta carta.'],
['Artilugio de Evacuación Compulsiva','Trampa','Normal',0,0,0,'evac','Seleccioná 1 monstruo en el Campo; devolvelo a la mano.'],
['Agujero Trampa Sin Fondo','Trampa','Normal',0,0,0,'pit','Cuando tu adversario Invoca uno o más monstruos con 1500 ATK o más: destruí esos monstruos y, si lo hacés, destiérralos en lugar de mandarlos al Cementerio.'],
['Slifer el Dragón del Cielo','Divino','Bestia Divina',10,0,0,'slifer','Requiere 3 Sacrificios. Su ATK/DEF es 1000 por cada carta en tu mano. Al ser Invocada de Modo Normal, los monstruos en Ataque del rival pierden 2000 ATK (se destruyen si llegan a 0).'],
['Kuriboh','Oscuridad','Demonio',1,300,200,'kuri','Durante el turno del rival, en el cálculo de daño: podés descartar esta carta; no recibís daño de batalla de ese combate (efecto rápido).'],
['Gran Escudo Gardna','Tierra','Guerrero',4,100,2600,'gardna','Durante el turno de cualquier jugador, cuando esta carta boca abajo es seleccionada por una Carta Mágica: se voltea a Defensa boca arriba y niega la activación de esa Carta Mágica.'],
['Paladín Oscuro','Oscuridad','Lanza Conjuros',8,2900,2400,'dpal','Fusión: "Mago Oscuro" + "Buster Blader". Gana 500 ATK por cada Dragón en el Campo y en ambos Cementerios. Puede descartar 1 carta para negar la activación de una Carta Mágica y destruirla.'],
['Toma Almas','Magia','Normal',0,0,0,'souls','Seleccioná 1 monstruo boca arriba del rival; destruilo y después el rival gana 1000 LP.'],
['Polimerización','Magia','Normal',0,0,0,'poly','Invocá por Fusión 1 monstruo de tu Deck Extra, usando como materiales monstruos de tu mano o de tu lado del Campo.'],
['Multiplicar','Magia','Juego Rápido',0,0,0,'multi','Sacrificá 1 "Kuriboh" boca arriba para Invocar de Modo Especial tantas Fichas Kuriboh como puedas (Demonio/Oscuridad/Nivel 1/300/200) en Defensa. No pueden usarse como Sacrificio.'],
['Monstruo Renacido','Magia','Normal',0,0,0,'reborn','Seleccioná 1 monstruo del Cementerio del rival o del tuyo y ponelo en tu Campo bajo tu control (Ataque o Defensa). Cuenta como Invocación Especial.'],
['Mil Cuchillos','Magia','Normal',0,0,0,'knives','Si controlás un "Mago Oscuro": seleccioná 1 monstruo que controle el rival; destruilo.'],
['La Piedra del Sabio','Magia','Juego Rápido',0,0,0,'stone','Solo si controlás una "Maga Oscura" boca arriba. Invocá de Modo Especial desde tu mano o Deck 1 "Mago Oscuro".'],
['Fórmula Mágica','Magia','Equipo',0,0,0,'formula','Solo se equipa a "Mago Oscuro" o "Maga Oscura". El monstruo equipado gana 700 ATK. Cuando esta carta va al Cementerio desde el Campo, ganás 1000 LP.'],
['Flecha Rompedora de Hechizos','Magia','Normal',0,0,0,'arrow','Destruí todas las Cartas Mágicas boca arriba que controle el rival y, si lo hacés, infligí 500 de daño al rival por cada una.'],
['Espadas de la Luz Reveladora','Magia','Continua',0,0,0,'swords','Voltea boca arriba todos los monstruos del rival. Permanece 3 turnos del rival. Mientras esté boca arriba, los monstruos del rival no pueden declarar ataques.'],
['Destrucción de la Carta','Magia','Normal',0,0,0,'carddes','Cada jugador descarta toda su mano y después roba la misma cantidad de cartas que descartó.'],
['De-Fusión','Magia','Juego Rápido',0,0,0,'defus','Seleccioná 1 Monstruo de Fusión boca arriba del Campo; bajalo al Deck Extra y, si todos sus materiales están en tu Cementerio, podés Invocarlos de Modo Especial.'],
['Cortina de Magia Oscura','Magia','Normal',0,0,0,'curtain','Pagá la mitad de tus LP; Invocá de Modo Especial desde tu Deck 1 "Mago Oscuro". No podés Invocar otros monstruos este turno (sí Colocar).'],
['Caja Mística','Magia','Normal',0,0,0,'mbox','Seleccioná 1 monstruo que controlés y 1 que controle el rival; destruí el primero y después tomá el control del segundo.'],
['Ataque Mágico Oscuro','Magia','Normal',0,0,0,'dmatk','Si controlás un "Mago Oscuro": destruí todas las Cartas Mágicas y de Trampa que controle el rival.'],
['Restauración Milagrosa','Trampa','Normal',0,0,0,'restor','Retirá 2 Contadores Mágicos de tu lado del Campo; luego seleccioná 1 "Mago Oscuro" o "Buster Blader" de tu Cementerio e Invocalo de Modo Especial.'],
['Fuerza de Espejo','Trampa','Normal',0,0,0,'mforce','Cuando un monstruo del rival declara un ataque: destruí todos los monstruos en Posición de Ataque que controle el rival.'],
['Cuerda de Alma','Trampa','Normal',0,0,0,'soulrope','Solo cuando un monstruo tuyo es destruido y mandado al Cementerio. Pagá 1000 LP para Invocar de Modo Especial 1 monstruo de Nivel 4 desde tu Deck.'],
['Círculo Atahechizos','Trampa','Continua',0,0,0,'spcirc','Seleccioná 1 monstruo del rival; no puede atacar ni cambiar su posición de batalla. Cuando ese monstruo es destruido, destruí esta carta.'],
['Cilindro Mágico','Trampa','Normal',0,0,0,'cylinder','Negá el ataque de 1 monstruo del rival e infligile daño igual al ATK del atacante.'],
['Princesa Insecto','Viento','Insecto',6,1900,1200,'ibprin','Mientras esté boca arriba, los monstruos Insecto boca arriba del rival pasan a Posición de Ataque. Cada vez que destruya en batalla un monstruo Insecto, gana 500 ATK.'],
['Pinch Hopper','Tierra','Insecto',4,1000,1200,'hopper','Cuando esta carta que controlás va al Cementerio desde el Campo: podés Invocar de Modo Especial desde tu mano 1 monstruo Insecto.'],
['Insecto Come-hombres','Tierra','Insecto',2,450,600,'eater','VOLTEO: seleccioná 1 monstruo en el Campo; destruilo.'],
['Gran Moth','Tierra','Insecto',8,2600,2500,'gmoth','No puede ser Invocada de Modo Normal ni Colocada. Solo por Invocación Especial sacrificando a "Petit Moth" en el 4º de tus turnos después de que haya sido equipada con "Capullo Evolutivo".'],
['Gran Moth Definitivo Perfecto','Tierra','Insecto',8,3500,3000,'pmoth','No puede ser Invocada de Modo Normal ni Colocada. Solo por Invocación Especial sacrificando a "Petit Moth" en el 6º de tus turnos después de que haya sido equipada con "Capullo Evolutivo".'],
['Capullo Evolutivo','Tierra','Insecto',3,0,2000,'cocoon','Podés equipar esta carta desde tu mano como Carta Mágica de Equipo a un "Petit Moth" boca arriba en el Campo. Si está equipada, el ATK y la DEF del "Capullo Evolutivo" se aplican a ese "Petit Moth".'],
['Reina Insecto','Tierra','Insecto',7,2200,2400,'iqueen','Cada vez que declare un ataque, debés sacrificar 1 monstruo. Gana 200 ATK por cada monstruo Insecto en el Campo. Si destruye un monstruo del rival en batalla, en la End Phase se Invoca de Modo Especial 1 Ficha Insecto (Tierra, Nivel 1, 100/100) en Ataque.'],
['Multiplicación de Hormigas','Magia','Normal',0,0,0,'ants','Sacrificá 1 monstruo Insecto de tu Campo para activarla. Invocá de Modo Especial 2 "Fichas de Ejército de Hormigas" (Insecto/Tierra/Nivel 4/500/1200) en tu Campo. No pueden usarse como Sacrificio.'],
['Espadas de la Luz Reveladora','Magia','Continua',0,0,0,'swords','Voltea boca arriba todos los monstruos del rival. Permanece 3 turnos del rival. Mientras esté boca arriba, los monstruos del rival no pueden declarar ataques.'],
['Bosque','Magia','Campo',0,0,0,'forest','Aumenta 200 el ATK y la DEF de todos los monstruos Insecto, Bestia, Planta y Bestia Guerrera.'],
['Barrera de Insectos','Magia','Continua',0,0,0,'ibar','Los monstruos Insecto que controle el rival no pueden declarar ataques.'],
['Armadura de Cañón Láser','Magia','Equipo',0,0,0,'laser','Un monstruo Insecto equipado con esta carta aumenta 300 su ATK y su DEF.'],
['Zona Segura','Trampa','Continua',0,0,0,'safe','Activá seleccionando 1 monstruo en Ataque boca arriba del Campo; no puede ser seleccionado ni destruido por efectos de cartas, ni destruido en batalla, y no puede atacar directamente. Cuando esta carta deja el Campo, destruí ese monstruo; y viceversa.'],
['Negar Ataque','Trampa','Contraria',0,0,0,'negatk','Cuando un monstruo del rival ataca: negá el ataque y terminá la Battle Phase del rival.'],
['Cirugía de ADN','Trampa','Continua',0,0,0,'dna','Activá declarando 1 Tipo de monstruo. Todos los monstruos boca arriba se convierten en ese Tipo.'],
['Exodia, el Prohibido','Oscuridad','Lanza Conjuros',3,1000,1000,'exodia','Si tenés en la mano esta carta junto con la Pierna Izquierda, Pierna Derecha, Brazo Izquierdo y Brazo Derecho del Prohibido, ganás el Duelo al instante.'],
['Un Día de Paz','Magia','Normal',0,0,0,'peace','Cada jugador roba 1 carta y ningún jugador recibe daño hasta el final del próximo turno de su adversario.'],
['Olla de la Dualidad','Magia','Normal',0,0,0,'duality','Excavá las 3 cartas superiores de tu Deck, añadí 1 de ellas a tu mano y barajá el resto. Solo 1 por turno. No podés Invocar de Modo Especial este turno.'],
['Goblin Insolente','Magia','Normal',0,0,0,'goblin','Robá 1 carta de tu Deck. El rival gana 1000 LP.'],
['Pierna Izquierda del Prohibido','Oscuridad','Lanza Conjuros',1,200,300],
['Pierna Derecha del Prohibido','Oscuridad','Lanza Conjuros',1,200,300],
['Brazo Izquierdo del Prohibido','Oscuridad','Lanza Conjuros',1,200,300],
['Brazo Derecho del Prohibido','Oscuridad','Lanza Conjuros',1,200,300],
['Waboku','Trampa','Normal',0,0,0,'waboku','Este turno no recibís daño de batalla de monstruos del rival y tus monstruos no pueden ser destruidos en batalla.'],
['Tarjeta de Regalo','Trampa','Normal',0,0,0,'gift','Tu adversario gana 3000 LP.'],
['Dragón Blanco de Ojos Azules','Luz','Dragón',8,3000,2500],
['Rugido Amenazante','Trampa','Normal',0,0,0,'roar','Tu adversario no puede declarar un ataque durante este turno.'],
['Mala Reacción de Simochi','Trampa','Continua',0,0,0,'simochi','El efecto de aumentar los LP de tu adversario se cambia por infligirle esa misma cantidad de daño.'],
['Legado de Yata-Garatsu','Trampa','Normal',0,0,0,'yata','Elegí 1 efecto: robá 1 carta; o, solo si el rival controla 1 monstruo Spirit boca arriba, robá 2 cartas.'],
['Jarra de la Codicia','Trampa','Normal',0,0,0,'pot','Robá 1 carta de tu Deck.'],
['Fortuna Acumulada','Trampa','Normal',0,0,0,'fortune','Solo se activa como Eslabón de Cadena 4 o más alto. Robá 2 cartas.'],
['Esperanza de Escape','Trampa','Normal',0,0,0,'hope','Solo si el rival tiene al menos 1000 LP más que vos. Pagá 1000 LP. Robá 1 carta por cada 2000 LP de diferencia entre tus LP y los del rival.'],
['Codicia Imprudente','Trampa','Normal',0,0,0,'greed','Robá 2 cartas y salteá tus 2 próximas Draw Phases.'],
['Polimerización','Magia','Normal',0,0,0,'poly','Invocá por Fusión 1 monstruo de tu Deck Extra, usando como materiales monstruos de tu mano o de tu lado del Campo.'],
['Puerta de Fusión','Magia','Campo',0,0,0,'gate','Mientras esté en el Campo, cualquier jugador puede Invocar por Fusión sin usar "Polimerización", pero los Materiales de Fusión se destierran en vez de mandarse al Cementerio.']];

Object.entries({1:6,9:5,17:4,22:5,24:4,26:1,28:5,29:4,30:5,32:5}).forEach(([i,l])=>D[i-1][3]=l);
const DEADK=new Set(['valk','exod','larva','gmoth','pmoth','sisters','toonbe','paladin','cocoon','restor','fortune','dpal']),DEADID=new Set([119,190,227]);
const C=D.map(([n,at,ra,lv,a,d,k,x],i)=>({id:i+1,n,at,ra,lv,a,d,k,x,ty:at=='Magia'?'s':at=='Trampa'?'p':'m',fus:k=='fus'||k=='dpal',dead:DEADK.has(k)||DEADID.has(i+1)}));
const pad=id=>String(id).padStart(3,'0'),img=id=>`assets/t/${pad(id)}.jpg`,big=id=>`assets/cards/${pad(id)}.jpg`,BACK='assets/back.png';
const FM={73:['Hierba de Fuego','Pequeño Dragón'],119:['Manipulador de la Llama','Masaki el Espadachín Legendario'],134:['Sirviente del Craneo','Guerrero de Batalla'],141:['Gaia, el Caballero Feroz','Maldición de Dragón'],147:['M-Guerrero Nº 1','M-Guerrero Nº 2'],173:['Mago del Tiempo','Bebé Dragón'],190:['Oso Panda Frenético','Ryu-Kishin'],218:['Dragón Blanco de Ojos Azules','Dragón Blanco de Ojos Azules','Dragón Blanco de Ojos Azules'],227:['Mago Oscuro','Buster Blader']};

// ===== Utilidades =====
const $=(s,r=document)=>r.querySelector(s);
const el=(t,c,h)=>{const e=document.createElement(t);if(c)e.className=c;if(h!=null)e.innerHTML=h;return e};
let G,uid=0,shown=[LP0,LP0],mute=false,AC,DK=[[],[]],SAVED=null;const Z={};
const P=i=>G.p[i],me=()=>P(G.turn),op=()=>P(1-G.turn),O=i=>1-i;
const busy=()=>G.over||G.curtain||G.ask;
const cd=m=>m.ov||C[m.id-1],nm=m=>cd(m).n,KK=m=>cd(m).k,isMon=m=>cd(m).ty=='m';
const needT=c=>c.k=='slifer'?3:c.lv>=7?2:c.lv>=5?1:0;
const MONS=pi=>P(pi).field.map((m,i)=>m&&[m,i]).filter(Boolean),UPM=pi=>MONS(pi).filter(([m])=>!m.fd);
const STU=(pi,k)=>P(pi).st.filter(c=>c&&!c.fd&&cd(c).k==k);
const jin=()=>[0,1].some(i=>UPM(i).some(([m])=>KK(m)=='jinzo'||KK(m)=='jz2'));
const hasS=(pi,k)=>STU(pi,k).length>0,hasT=(pi,k)=>!jin()&&STU(pi,k).length>0;
const FZ=pi=>P(pi).fz?cd(P(pi).fz).k:null,anyFZ=k=>FZ(0)==k||FZ(1)==k;
const dnaT=()=>{if(jin())return null;for(const i of [0,1])for(const c of P(i).st)if(c&&!c.fd&&cd(c).k=='dna'&&c.dt)return c.dt;return null};
const cls=m=>(!m.fd&&m.pos&&dnaT())||cd(m).ra;
const isSafe=m=>!jin()&&[0,1].some(j=>P(j).st.some(c=>c&&!c.fd&&cd(c).k=='safe'&&c.tg==m.u));
const frozen=m=>!jin()&&[0,1].some(j=>P(j).st.some(c=>c&&!c.fd&&cd(c).k=='spcirc'&&c.tg==m.u));
const isMage=c=>['Mago Oscuro','Mago del Caos Negro'].includes(cd(c).n);
const free=pi=>P(pi).field.indexOf(null)>=0,nfree=pi=>P(pi).field.filter(x=>!x).length;
function stats(pi,m){const c=cd(m),k=c.k;let a=c.a+(m.bonus||0)+(m.tmp||0),d=c.d+(m.dbonus||0);
  if(m.fd)return[a,d];
  P(pi).st.forEach(e=>{if(e&&!e.fd&&e.tg==m.u){const q=cd(e).k;if(q=='formula')a+=700;if(q=='laser'){a+=300;d+=300}}});
  if(k=='maga')a+=300*[0,1].reduce((s,i)=>s+P(i).grave.filter(isMage).length,0);
  if(k=='ghoul')a+=100*P(pi).grave.filter(isMon).length;
  if(k=='swamp')a+=500*UPM(pi).filter(([x])=>cd(x).n=='Guardián de Batalla de Lava').length;
  if(k=='iqueen')a+=200*[0,1].reduce((s,i)=>s+UPM(i).filter(([x])=>cls(x)=='Insecto').length,0);
  if(k=='slifer')a=d=1000*P(pi).hand.length;
  if(k=='dpal')a+=500*([0,1].reduce((s,i)=>s+UPM(i).filter(([x])=>cls(x)=='Dragón').length+P(i).grave.filter(g=>cd(g).ra=='Dragón').length,0));
  if(k=='pumpk'&&[0,1].some(i=>UPM(i).some(([x])=>x.id==187))){a+=200+100*(m.ps||0);d+=200+100*(m.ps||0)}
  const cl=cls(m);
  if(anyFZ('forest')&&['Insecto','Bestia','Planta','Bestia Guerrera'].includes(cl)){a+=200;d+=200}
  if(G.cz&&cl=='Zombi'){const b=200*(1+G.cz.steps);a+=b;d+=b}
  return[a,d]}
const atk=(pi,m)=>Math.max(0,stats(pi,m)[0]),dfn=(pi,m)=>Math.max(0,stats(pi,m)[1]);
function snd(f,d=.12,ty='square'){if(mute)return;try{AC=AC||new(window.AudioContext||window.webkitAudioContext)();
  const o=AC.createOscillator(),g=AC.createGain();o.type=ty;o.frequency.value=f;g.gain.value=.05;o.connect(g);g.connect(AC.destination);o.start();
  g.gain.exponentialRampToValueAtTime(.0001,AC.currentTime+d);o.stop(AC.currentTime+d)}catch(e){}}
function shuffle(a){for(let i=a.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[a[i],a[j]]=[a[j],a[i]]}return a}
const mkDeck=ids=>shuffle(ids.map(id=>({id,u:++uid})));
const stripc=m=>({id:m.id,u:m.u});

// ===== Estado =====
function newGame(){
  G={p:[0,1].map(i=>{const m=DK[i].filter(id=>!C[id-1].fus),x=DK[i].filter(id=>C[id-1].fus);
      return{lp:LP0,deck:mkDeck(m),ext:x.map(id=>({id,u:++uid})),hand:[],field:Array(SLOTS).fill(null),st:Array(SLOTS).fill(null),fz:null,grave:[],ban:[],skip:0}}),
    turn:0,n:1,phase:'main',summoned:false,sel:null,mode:null,ask:null,Q:[],atk:null,plan:null,msg:'',log:[],over:null,fresh:0,curtain:true,fl:{},cz:null,peace:0,wab:null,roar:0,nosp:0,nosum:0,iqt:0,ev:null};
  shown=[LP0,LP0];draw(0,HAND0);draw(1,HAND0);msg('¡Comienza el duelo! El Jugador 1 empieza (sin batalla en el primer turno).');ui()}
function draw(pi,n=1){const p=P(pi);for(let i=0;i<n;i++){if(!p.deck.length)return win(O(pi),`El Jugador ${pi+1} no puede robar.`);p.hand.push(p.deck.pop())}chkEx(pi)}
function chkEx(pi){const H=P(pi).hand.map(c=>cd(c).n);
  if(['Exodia, el Prohibido','Pierna Izquierda del Prohibido','Pierna Derecha del Prohibido','Brazo Izquierdo del Prohibido','Brazo Derecho del Prohibido'].every(n=>H.includes(n)))win(pi,'¡Exodia, el Prohibido! Victoria instantánea.')}
function say(t){if(G)G.msg=t;const d=el('div','toast',t);document.body.append(d);setTimeout(()=>d.remove(),2400)}
function msg(t){G.log.unshift(`T${G.n}: ${t}`);G.log.length=Math.min(G.log.length,80);say(t)}
function win(w,why){if(G.over)return;G.over={w,why};msg(`Gana el Jugador ${w+1}. ${why}`);snd(880,.5)}
function lp(pi,d,cost){const p=P(pi);
  if(d>0&&!cost&&hasT(O(pi),'simochi')){d=-d;msg('Mala Reacción de Simochi: el aumento de LP se convierte en daño.')}
  if(d<0&&!cost&&G.peace&&G.n<=G.peace){msg('Un Día de Paz: no se recibe daño.');return}
  p.lp=Math.max(0,p.lp+d);fx(pi,d);if(!p.lp)win(O(pi),`El Jugador ${pi+1} llegó a 0 LP.`)}
function fx(pi,d){const h=$(pi===G.turn?'#hudB':'#hudT'),f=el('div','fl '+(d<0?'neg':'pos'),(d>0?'+':'')+d);h.append(f);setTimeout(()=>f.remove(),1200);
  if(d<0){$('#board').classList.remove('shake');void $('#board').offsetWidth;$('#board').classList.add('shake');snd(200,.25,'sawtooth')}else snd(700)}
function take(pi,zone,u){const a=P(pi)[zone],j=a.findIndex(c=>c.u==u);return j>=0?a.splice(j,1)[0]:null}
const toGrave=(pi,c)=>P(pi).grave.push(stripc(c));

// ===== Movimiento de cartas =====
function leave(pi,m){for(const j of [0,1])P(j).st.forEach((c,x)=>{if(c&&c.tg==m.u){const k=cd(c).k;
  if(['formula','laser','spcirc','safe','calldam'].includes(k)){P(j).st[x]=null;toGrave(j,c);stGone(j,c)}}})}
function stGone(pi,c){const k=cd(c).k;
  if(k=='formula'){msg('Fórmula Mágica: +1000 LP.');lp(pi,1000)}
  if((k=='calldam'||k=='safe')&&c.tg)for(const j of [0,1]){const x=P(j).field.findIndex(m=>m&&m.u==c.tg);if(x>=0)kill(j,x,{des:1})}}
function destroyST(pi,z,i){const p=P(pi);let c;if(z=='z'){c=p.fz;p.fz=null}else{c=p.st[i];p.st[i]=null}if(!c)return;toGrave(pi,c);msg(`${cd(c).n} es destruida.`);stGone(pi,c)}
function kill(pi,i,o={}){const p=P(pi),m=p.field[i];if(!m)return;p.field[i]=null;leave(pi,m);
  const c=cd(m),by=o.by;
  if(m.tk){msg(`${c.n} (ficha) desaparece.`);return}
  if(o.how=='ban'||(KK(m)=='caos'&&!m.fd)||(by&&KK(by)=='caos'&&o.bat)){p.ban.push(stripc(m));msg(`${c.n} es desterrado.`)}
  else{toGrave(pi,m);
    if(o.bat&&by&&KK(by)=='volst'){msg('Des Volstgalph inflige 500 de daño.');lp(pi,-500)}
    gyTrig(pi,m)}
  if(o.des)offer(pi,'dest',{pi})}
function destroyM(pi,i,src,by){const m=P(pi).field[i];if(!m)return false;
  if(KK(m)=='exod'&&!m.fd)return false;
  if(isSafe(m))return false;
  if(src=='bat'&&G.wab&&G.wab.n==G.n&&G.wab.pi==pi)return false;
  kill(pi,i,{des:1,bat:src=='bat',by});return true}
function bounce(pi,i){const p=P(pi),m=p.field[i];if(!m)return;p.field[i]=null;leave(pi,m);if(!m.tk)p.hand.push(stripc(m));msg(`${nm(m)} vuelve a la mano.`)}
function gyTrig(pi,m){const k=KK(m),p=P(pi);
  if(k=='sangan')pickFrom(pi,pi,'deck','Sangan: añadí 1 monstruo con 1500 ATK o menos',c=>cd(c).ty=='m'&&cd(c).a<=1500&&!cd(c).fus,'toHand');
  if(k=='hopper')pickFrom(pi,pi,'hand','Pinch Hopper: invocá 1 Insecto de tu mano',c=>cd(c).ty=='m'&&cd(c).ra=='Insecto','spHand',null,true);
  if(k=='genesis'){const ds=p.grave.filter(c=>cd(c).ra=='Dragón'&&cd(c).ty=='m');if(ds.length){ds.forEach(c=>{take(pi,'grave',c.u);p.deck.push(c)});shuffle(p.deck);msg('Dragón del Génesis: los Dragones del Cementerio vuelven al Deck.')}}}
function spSum(pi,c,pos='a',o={}){const p=P(pi),i=p.field.indexOf(null);if(i<0)return false;
  const m={id:c.id,u:c.u||++uid,pos,fd:false,atkd:false,moved:false,t:G.n,bonus:0,tmp:0,ps:0,...o};if(c.ov)m.ov=c.ov;
  p.field[i]=m;G.fresh=m.u;msg(`Invocación Especial: ${nm(m)}.`);snd(440);onSum(pi,m,'s');return m}
function token(pi,id,ov,pos='d'){const c=C[id-1];return spSum(pi,{id,u:++uid,ov:{...c,...ov,k:undefined,x:'Ficha'}},pos,{tk:1,nt:1})}
function onSum(pi,m,how){const k=KK(m);
  if(k=='caos')pickFrom(pi,pi,'grave','Mago Oscuro del Caos: añadí 1 Carta Mágica del Cementerio',c=>cd(c).ty=='s','toHand',null,true);
  if(k=='slifer'&&(how=='n'||how=='t'))UPM(O(pi)).forEach(([x,i])=>{if(x.pos=='a'){x.bonus=(x.bonus||0)-2000;if(atk(O(pi),x)<=0)kill(O(pi),i,{des:1})}});
  if(k=='sage')pickFrom(pi,pi,'deck','Sabio Oscuro: añadí 1 Carta Mágica de tu Deck',c=>cd(c).ty=='s','toHandSh');
  if(!m.fd&&atk(pi,m)>=1500)offer(O(pi),'sum',{u:m.u,pi})}

// ===== Cola de acciones y avisos =====
function flush(){
  if(G.over||G.ask||(G.mode&&G.mode.k=='tg'))return;
  while(G.Q.length){const it=G.Q.shift();
    if(it.k=='fn'){RUN[it.act](it);if(G.over)return;continue}
    if(it.k=='tg'){G.mode=it;G.sel=null;return}
    G.ask=it;return}}
function pickFrom(pi,side,zone,t,flt,act,data,opt){const list=P(side)[zone].filter(c=>flt(c));if(!list.length)return false;
  G.Q.unshift({k:'pick',pi,side,zone,t,list,act,data,opt});return true}
function ask(pi,t,o){G.Q.unshift({k:'ask',pi,t,o})}
function tgReq(pi,t,s,p,f,act,data,nc){G.Q.unshift({k:'tg',pi,t,s,p,f,act,data,nc})}
function answer(j){const a=G.ask;if(!a)return;const o=a.o[j];G.ask=null;if(a.pi!=G.turn)G.curtain=true;AK[o[1]](a.pi,o[2],a);ui()}
function chosen(j){const a=G.ask;G.ask=null;if(a.pi!=G.turn)G.curtain=true;const c=j<0?null:a.list[j];
  if(c&&!a.noTake)takeAny(a,c);PK[a.act](a.pi,c,a.data,a);ui()}
function takeAny(a,c){const z=a.zone;
  if(z=='hg')return take(a.side,'hand',c.u)||take(a.side,'grave',c.u);if(z=='hd')return take(a.side,'hand',c.u)||take(a.side,'deck',c.u);
  if(z=='gg')return take(0,'grave',c.u)||take(1,'grave',c.u);return take(a.side,z,c.u)}
const EVT={atk:'ataque declarado',bp:'Fase de Batalla',sum:'Invocación',dest:'monstruo destruido'};
function offer(rp,ev,data){if(jin()||G.over)return;
  const o=[];P(rp).st.forEach((c,i)=>{if(!c||!c.fd||c.t>=G.n)return;const d=cd(c),f=FX[d.k];if(d.ty!='p'||!f||!f.ev||!f.ev.includes(ev)||(f.can&&f.can(rp,c,data)))return;o.push([d.n,'trap',{i,ev,data}])});
  if(!o.length)return;o.push(['No activar','none',null]);ask(rp,`Jugador ${rp+1}: ¿activar una Trampa? (${EVT[ev]})`,o)}

// ===== Activación de cartas =====
function actCard(z,i){const pi=G.turn,p=me(),c=z=='h'?p.hand[i]:p.st[i],d=cd(c),f=FX[d.k];
  if(!f)return say('Esta carta no tiene efecto activable.');
  if(d.ty=='p'){if(z=='h')return say('Las Trampas se colocan boca abajo primero.');if(c.t>=G.n)return say('No podés activar una carta recién colocada.');if(jin())return say('Jinzo niega las Cartas de Trampa.');if(!f.free)return say('Se activa en respuesta a una acción del rival.');}
  if(d.ty=='s'&&d.ra!='Juego Rápido'&&G.phase=='battle')return say('Solo en la Fase Principal.');
  const w=f.can&&f.can(pi,c,null);if(w)return say(w);
  if(z=='h'&&d.ra!='Campo'&&(d.ra=='Continua'||d.ra=='Equipo')&&p.st.indexOf(null)<0)return say('Tu zona de Mágicas/Trampas está llena.');
  startCard(pi,z,i,d.k)}
function startCard(pi,z,i,k,ev){const f=FX[k];
  if(f.tg){G.sel=null;return tgReq(pi,`${cd(P(pi)[z=='h'?'hand':'st'][i]).n}: ${f.tgt||'elegí un objetivo'}`,f.tg.s,f.tg.p,f.tg.f,'card',{pi,z,i,k,ev})}
  resolveCard(pi,z,i,k,null)}
function resolveCard(pi,z,i,k,t){const p=P(pi),c=z=='h'?p.hand[i]:p.st[i];if(!c)return;const d=cd(c),f=FX[k];
  const keep=d.ra=='Continua'||d.ra=='Equipo'||d.ra=='Campo';
  if(z=='h')p.hand.splice(i,1);else p.st[i]=null;
  G.sel=null;
  if(t&&t.z=='m'){const tm=P(t.pi).field[t.i];
    if(tm&&tm.fd&&KK(tm)=='gardna'&&d.ty=='s'){tm.fd=false;tm.pos='d';toGrave(pi,c);msg('Gran Escudo Gardna se voltea y niega la Carta Mágica.');return}}
  c.fd=false;c.t=G.n;msg(`${pi==G.turn?'':'(Respuesta) '}Jugador ${pi+1} activa ${d.n}.`);snd(660);
  if(keep){if(d.ra=='Campo'){if(p.fz){toGrave(pi,p.fz)}p.fz=c}else{const j=z=='s'?i:p.st.indexOf(null);p.st[j]=c}}
  if(d.ty=='s'&&(d.ra=='Normal'||d.ra=='Juego Rápido'))[0,1].forEach(j=>UPM(j).forEach(([m])=>{if(KK(m)=='volst')m.tmp=(m.tmp||0)+200}));
  f.run(pi,t,c);
  if(!keep)toGrave(pi,c)}
function setST(h){const p=me(),c=p.hand[h],d=cd(c);
  if(busy()||G.phase=='battle')return;
  if(d.ra=='Campo')return say('Las Mágicas de Campo se activan directamente.');
  if(p.st.indexOf(null)<0)return say('Tu zona de Mágicas/Trampas está llena.');
  p.hand.splice(h,1);c.fd=true;c.t=G.n;p.st[p.st.indexOf(null)]=c;G.sel=null;msg(`Jugador ${G.turn+1} coloca una carta boca abajo.`);snd(300);ui()}

// ===== Invocaciones =====
const canSum=()=>G.nosum!==G.n;
function summon(h,pos,slot){
  if(busy()||G.phase=='battle')return;
  const c=cd(me().hand[h]);
  if(c.ty!='m')return;
  if(c.dead||SPK.has(c.k)||c.fus)return say(c.fus?'Los monstruos de Fusión entran con Polimerización.':`${c.n} solo se Invoca de Modo Especial.`);
  if(G.summoned)return say('Ya hiciste tu Invocación Normal o Colocación este turno.');
  if(!canSum())return say('No podés Invocar otros monstruos este turno (Cortina de Magia Oscura).');
  const nd=needT(c),tr=MONS(G.turn).filter(([m])=>!m.nt).length,fr=MONS(G.turn).length;
  if(nd>tr)return say(`Necesitás ${nd} monstruo(s) en tu campo para tributar.`);
  if(!nd&&fr>=SLOTS)return say('Tu campo está lleno.');
  if(nd){G.mode={k:'trib',h,pos,nd,sel:[]};G.sel=null;return ui()}
  place(h,pos,[],slot)}
function place(h,pos,tr,slot){const p=me(),c=p.hand.splice(h,1)[0];
  tr.forEach(i=>{const m=p.field[i];p.field[i]=null;leave(G.turn,m);toGrave(G.turn,m);gyTrig(G.turn,m)});
  const pup=pups(),i=slot!=null&&!p.field[slot]?slot:p.field.indexOf(null);
  const m={id:c.id,u:c.u,pos:pos=='a'?'a':'d',fd:pos=='s',atkd:false,moved:false,t:G.n,bonus:0,tmp:0,ps:0};
  p.field[i]=m;G.summoned=true;G.fresh=c.u;G.mode=null;G.sel={z:'f',pi:G.turn,i};snd(440);
  msg(`Jugador ${G.turn+1} ${pos=='s'?'coloca un monstruo boca abajo':'invoca a '+nm(m)+(tr.length?' (tributo)':'')}.`);
  if(pos!='s'){titi(pup);onSum(G.turn,m,tr.length?'t':'n')}ui()}
const SPK=new Set(['valk','jz2','malic','exod','larva','gmoth','pmoth','sisters','toonbe','paladin']);
const pups=()=>[0,1].map(pi=>UPM(pi).filter(([m])=>m.id==71).length);
function titi(pp){pp.forEach((n,pi)=>{if(n&&!G.over){msg(`Titiritero Misterioso: +${500*n} LP para el Jugador ${pi+1}.`);lp(pi,500*n)}})}
function special(h){const p=me(),c0=p.hand[h],d=cd(c0),k=d.k,pi=G.turn;
  if(busy()||G.phase=='battle')return;
  if(G.nosp===G.n||!canSum())return say('No podés Invocar de Modo Especial este turno.');
  const miss=n=>say(`${d.n} necesita "${n}", que no existe en este conjunto de cartas.`);
  if(k=='valk'){const names=['Alpha el Guerrero Magnético','Beta el Guerrero Magnético','Gamma el Guerrero Magnético'];
    if(!C.some(c=>c.n==names[2]))return miss('Gamma el Guerrero Magnético')}
  else if(k=='jz2'){const j=UPM(pi).find(([m])=>KK(m)=='jinzo');if(!j)return say('Requiere sacrificar a "Jinzo" boca arriba en tu campo.');
    const [m,i]=j;p.field[i]=null;leave(pi,m);toGrave(pi,m);const v=p.hand.splice(h,1)[0];spSum(pi,v,'a');G.sel=null;return ui()}
  else if(k=='malic'){if(MONS(pi).some(([m])=>KK(m)=='malic')||MONS(O(pi)).some(([m])=>KK(m)=='malic'))return say('Solo puede haber 1 monstruo "Malicioso" boca arriba.');
    const b=p.deck.find(x=>cd(x).n=='Dragón Blanco de Ojos Azules');if(!b)return say('Requiere desterrar 1 "Dragón Blanco de Ojos Azules" de tu Deck.');
    if(!free(pi))return say('Tu campo está lleno.');take(pi,'deck',b.u);p.ban.push(b);shuffle(p.deck);const v=p.hand.splice(h,1)[0];spSum(pi,v,'a');G.sel=null;return ui()}
  else if(k=='exod')return miss('Contrato con Exodia');
  else if(k=='sisters')return miss('Egoísta Elegante');
  else if(k=='toonbe')return miss('Mundo Toon');
  else if(k=='paladin')return miss('Ritual del Dragón Blanco');
  else return miss('Petit Moth');
}
// Fusión
function fuseMats(pi,fid){const p=P(pi),want=[...FM[fid]],pool=[...p.hand.map((c,i)=>({s:'h',i,c})),...MONS(pi).map(([m,i])=>({s:'f',i,c:m}))],used=new Set(),res=[];let miss=0;
  for(const n of want){const j=pool.findIndex((x,k)=>!used.has(k)&&isMon(x.c)&&!cd(x.c).fus&&cd(x.c).n==n);if(j>=0){used.add(j);res.push(pool[j])}else miss++}
  if(miss==1){const j=pool.findIndex((x,k)=>!used.has(k)&&cd(x.c).n=='Diosa del Tercer Ojo');if(j>=0){used.add(j);res.push(pool[j]);miss=0}}
  return miss?null:res}
function fusable(pi){return P(pi).ext.filter(c=>FM[c.id]&&fuseMats(pi,c.id)&&(nfree(pi)+fuseMats(pi,c.id).filter(x=>x.s=='f').length>0))}
function fuse(pi,fc,ban){const p=P(pi),mats=fuseMats(pi,fc.id);if(!mats)return false;
  take(pi,'ext',fc.u);
  mats.forEach(x=>{if(x.s=='h')p.hand=p.hand.filter(c=>c!==x.c);else{const j=p.field.indexOf(x.c);if(j>=0){p.field[j]=null;leave(pi,x.c)}}ban?p.ban.push(stripc(x.c)):(toGrave(pi,x.c))});
  const m=spSum(pi,fc,'a',{mats:mats.map(x=>x.c.id)});if(!m){p.ext.push(fc);return false}msg(`¡Invocación por Fusión: ${nm(m)}!`);return true}
const gateOn=()=>anyFZ('gate');

// ===== Combate =====
function canAtk(pi,m,i){
  if(G.phase!='battle')return 'Solo en la Fase de Batalla.';
  if(m.atkd||m.fd||m.pos!='a')return 'Ese monstruo no puede atacar.';
  if(frozen(m))return 'Círculo Atahechizos lo inmoviliza.';
  if(hasS(O(pi),'swords'))return 'Espadas de la Luz Reveladora impide atacar.';
  if(hasS(O(pi),'ibar')&&cls(m)=='Insecto')return 'Barrera de Insectos impide atacar a los Insectos.';
  if(G.roar===G.n)return 'Rugido Amenazante impide atacar este turno.';
  if(m.noatk===G.n)return 'Ese monstruo no puede atacar este turno.';
  if(KK(m)!='malic'&&MONS(pi).some(([x])=>KK(x)=='malic'&&!x.fd))return 'Con el Malicioso, tus otros monstruos no pueden atacar.';
  if(KK(m)=='iqueen'&&MONS(pi).length<2)return 'Reina Insecto necesita otro monstruo para sacrificar.';
  return null}
function startAtk(i){const m=me().field[i],w=canAtk(G.turn,m,i);if(w)return say(w);
  if(!MONS(O(G.turn)).length)return attack(i,null);
  G.mode={k:'atk',i};G.sel=null;ui()}
function attack(i,ti){
  const pi=G.turn,oi=O(pi),m=me().field[i],D=op();
  if(ti!=null){const t=D.field[ti],g=D.field.find(x=>x&&KK(x)=='valq'&&!x.fd);
    if(g&&t!==g&&!t.fd&&cls(t)=='Lanza Conjuros'){G.mode=null;say('Valquiria del Mago protege a los demás Lanza Conjuros.');return ui()}}
  else if(isSafe(m)){G.mode=null;say('Zona Segura: ese monstruo no puede atacar directamente.');return ui()}
  G.mode=null;G.sel=null;m.atkd=true;snd(520,.15);
  const t=ti!=null?D.field[ti]:null;
  G.atk={u:m.u,tu:t?t.u:null,neg:false,pi};
  msg(`${nm(m)} declara un ataque${t?'':' directo'}.`);
  const L=[];
  if(KK(m)=='iqueen')L.push({k:'tg',pi,t:'Reina Insecto: sacrificá 1 monstruo',s:'own',p:'mon',f:'any',act:'iqs',data:{u:m.u},nc:1,ns:1});
  L.push({k:'fn',act:'atkresp'},{k:'fn',act:'atkfinal'});
  G.Q.unshift(...L);ui()}
const RUN={
  atkresp(){offer(O(G.atk.pi),'atk',{u:G.atk.u})},
  atkfinal(){const A=G.atk;if(!A)return;const pi=A.pi,oi=O(pi),m=P(pi).field.find(x=>x&&x.u==A.u);
    if(!m||A.neg||G.phase!='battle'){G.atk=null;return}
    let t=A.tu!=null?P(oi).field.find(x=>x&&x.u==A.tu):null;
    if(A.tu!=null&&!t){G.atk=null;msg('El objetivo ya no está: el ataque se cancela.');return}
    if(t&&t.fd){t.fd=false;msg(`Se revela ${nm(t)}.`);flipFx(oi,t,false)}
    const a=atk(pi,m),pl={kd:false,ka:false,dmg:0,to:-1,by:m.u};
    if(!t){pl.dmg=a;pl.to=oi}
    else if(t.pos=='a'){const x=a-atk(oi,t);
      if(x>0){pl.kd=true;pl.dmg=x;pl.to=oi}else if(x<0){pl.ka=true;pl.dmg=-x;pl.to=pi}else{pl.kd=pl.ka=true}}
    else{if(KK(m)=='paladin'){pl.kd=true}else{const x=a-dfn(oi,t);if(x>0)pl.kd=true;else if(x<0){pl.dmg=-x;pl.to=pi}}}
    G.plan=pl;
    if(pl.dmg>0&&P(pl.to).hand.some(c=>cd(c).k=='kuri'))ask(pl.to,`Jugador ${pl.to+1}: ¿descartar a Kuriboh para no recibir daño de batalla?`,[['Descartar Kuriboh','kuri',null],['No','none',null]]);
    G.Q.push({k:'fn',act:'plan'})},
  plan(){const pl=G.plan,A=G.atk;if(!pl||!A)return;G.plan=null;G.atk=null;const pi=A.pi,oi=O(pi);
    const mi=P(pi).field.findIndex(x=>x&&x.u==pl.by),m=P(pi).field[mi];
    const ti=A.tu!=null?P(oi).field.findIndex(x=>x&&x.u==A.tu):-1,t=ti>=0?P(oi).field[ti]:null;
    if(pl.kd&&t){const insect=cls(t)=='Insecto';if(destroyM(oi,ti,'bat',m)){if(m&&KK(m)=='ibprin'&&insect)m.bonus=(m.bonus||0)+500;if(m&&KK(m)=='iqueen')G.iqt=pi+1}}
    if(pl.ka&&m)destroyM(pi,mi,'bat',t);
    if(pl.dmg>0&&!(G.wab&&G.wab.n==G.n&&G.wab.pi==pl.to)){lp(pl.to,-pl.dmg);msg(`${pl.to==oi?'El rival recibe':'Recibís'} ${pl.dmg} de daño de batalla.`);
      if(pl.to==oi&&m&&KK(m)=='somb'&&P(oi).hand.length&&!G.over){const r=P(oi).hand.splice(Math.random()*P(oi).hand.length|0,1)[0];toGrave(oi,r);msg(`Sombrero Mágico Blanco: el rival descarta ${nm(r)}.`)}}
    const mm=P(pi).field.find(x=>x&&x.u==pl.by);if(mm&&KK(mm)=='gob'){mm.gob=true}
    snd(520,.15)}
};

// ===== Fases y turnos =====
function nextPhase(){
  if(busy()||G.mode)return;
  if(G.phase=='main'){if(G.n===1){G.phase='main2';msg('Primer turno: sin batalla.')}else{G.phase='battle';msg('Fase de Batalla.');offer(O(G.turn),'bp',null)}}
  else if(G.phase=='battle'){G.phase='main2';msg('Fase Principal 2.');endBattle()}
  G.sel=null;ui()}
function endBattle(){me().field.forEach(m=>{if(m&&m.gob){m.gob=false;m.pos='d';m.stuck=2;msg(`${nm(m)} pasa a defensa tras atacar.`)}})}
function endTurn(){
  if(busy()||G.mode)return;
  if(me().hand.length>HLIM){G.mode={k:'disc'};G.sel=null;return ui()}
  const pi=G.turn,p=me();
  if(G.phase=='battle')endBattle();
  p.field.forEach((m,i)=>{if(m){m.tmp=0;if(m.stuck)m.stuck--;if(KK(m)=='worm'&&!m.fd){bounce(pi,i)}}});
  if(G.iqt){const q=G.iqt-1;G.iqt=0;if(free(q))token(q,153,{n:'Ficha Insecto',at:'Tierra',ra:'Insecto',lv:1,a:100,d:100},'a')}
  P(O(pi)).st.forEach((c,x)=>{if(c&&!c.fd&&cd(c).k=='swords'){c.cnt=(c.cnt||0)+1;if(c.cnt>=3)destroyST(O(pi),'s',x)}});
  if(G.cz){G.cz.life--;if(G.cz.life<=0)G.cz=null}
  G.turn=O(pi);G.n++;G.phase='main';G.summoned=false;G.sel=null;G.mode=null;
  const q=me();
  q.field.forEach(m=>{if(m){m.atkd=false;m.moved=false;m.fdt=false;if(KK(m)=='exod'&&!m.fd)m.bonus=(m.bonus||0)+500;if(KK(m)=='pumpk'&&!m.fd&&(m.ps||0)<3)m.ps=(m.ps||0)+1}});
  if(G.cz&&G.cz.pi==G.turn&&G.cz.steps<3)G.cz.steps++;
  if(q.skip>0){q.skip--;msg('Saltás la Fase de Robo (Codicia Imprudente).')}else draw(G.turn);
  msg(`Turno ${G.n}: Jugador ${G.turn+1}.`);G.curtain=true;snd(520);ui()}
function discard(i){const p=me();toGrave(G.turn,p.hand.splice(i,1)[0]);if(p.hand.length<=HLIM){G.mode=null;endTurn()}else ui()}
function statics(){[0,1].forEach(pi=>{
  if(UPM(pi).some(([m])=>KK(m)=='malic')&&!FZ(0)&&!FZ(1))MONS(pi).forEach(([m,i])=>{if(KK(m)=='malic'&&!m.fd)kill(pi,i,{des:1})});
  if(UPM(O(pi)).some(([m])=>KK(m)=='ibprin'))UPM(pi).forEach(([m])=>{if(cls(m)=='Insecto')m.pos='a'})})}

// ===== Efectos de cartas =====
const isDC=c=>cd(c).ty=='m'&&cd(c).ra=='Dragón',isNDC=c=>isDC(c)&&!cd(c).k&&!cd(c).fus,isMonC=c=>cd(c).ty=='m'&&!cd(c).fus;
const isBE=m=>cd(m).n=='Dragón Blanco de Ojos Azules',mageN=m=>cd(m).n=='Mago Oscuro';
const upHas=(pi,f)=>UPM(pi).some(([m])=>f(m));
const noSp=()=>G.nosp===G.n?'No podés Invocar de Modo Especial este turno.':G.nosum===G.n?'No podés Invocar monstruos este turno.':null;
const TF={any:()=>true,up:m=>!m.fd,fus:m=>!m.fd&&cd(m).fus,ins:m=>!m.fd&&cls(m)=='Insecto',kuri:m=>!m.fd&&cd(m).n=='Kuriboh',mag:m=>!m.fd&&['Mago Oscuro','Maga Oscura'].includes(cd(m).n),
  dr:m=>!m.fd&&cls(m)=='Dragón',dr5:m=>!m.fd&&cls(m)=='Dragón'&&cd(m).lv>=5,atkup:m=>!m.fd&&m.pos=='a',exor:c=>c.fd||cd(c).ty=='s',rp:c=>c.fd||cd(c).ty=='p',stup:c=>!c.fd};
const tgt=t=>t.z=='m'?P(t.pi).field[t.i]:t.z=='s'?P(t.pi).st[t.i]:P(t.pi).fz;
const anyST=pi=>P(pi).st.some(Boolean)||!!P(pi).fz;
function pickList(pi,t,list,act,data,opt,noTake,zone,side){if(!list.length)return false;G.Q.unshift({k:'pick',pi,side:side??pi,zone,t,list,act,data,opt,noTake});return true}
function destroyAllST(pi){P(pi).st.forEach((c,x)=>c&&destroyST(pi,'s',x));if(P(pi).fz)destroyST(pi,'z')}
function equipTo(c,m){c.tg=m.u;if(KK(m)=='gear'){const j=P(G.turn).st.indexOf(c);const o=[0,1].find(q=>P(q).st.includes(c));if(o!=null)destroyST(o,'s',P(o).st.indexOf(c));msg('Gearfried destruye la Carta de Equipo.')}}
function flipFx(pi,m,fs){const k=KK(m);
  if(k=='mask')pickFrom(pi,pi,'grave','Máscara de la Oscuridad: añadí 1 Trampa del Cementerio',c=>cd(c).ty=='p','toHand',null,true);
  if(k=='sig'&&fs){msg('Pájaro Sigiloso: 1000 de daño al rival.');lp(O(pi),-1000)}
  if(k=='ojo'){const n=Math.min(5,P(pi).deck.length);if(n>1){G.mode={k:'peek',pi,cards:P(pi).deck.slice(-n).reverse(),ord:[]};G.sel=null}}
  if(k=='castle'){G.cz={pi,steps:0,life:4};msg('Castillo de las Ilusiones Oscuras: los Zombi ganan 200 ATK/DEF.')}
  if(k=='reaper')tgReq(pi,'Segadora de las Cartas: elegí una Trampa (o carta boca abajo)','any','st','rp','reaper',null,1);
  if(k=='eater'&&[0,1].some(j=>MONS(j).length>1||MONS(j).some(([x])=>x!==m)))tgReq(pi,'Insecto Come-hombres: destruí 1 monstruo','any','mon','any','eater',{u:m.u},1);
  if(k=='piper')[0,1].forEach(j=>UPM(j).forEach(([x])=>{if(cls(x)=='Dragón')x.pos='a'}))}
const FX={
 shrine:{can:pi=>G.fl.shrine===G.n?'Solo 1 "Santuario de Dragones" por turno.':P(pi).deck.some(isDC)?null:'No hay Dragones en tu Deck.',
  run:pi=>{G.fl.shrine=G.n;pickFrom(pi,pi,'deck','Santuario de Dragones: mandá 1 Dragón al Cementerio',isDC,'shr1')}},
 burst:{can:pi=>upHas(pi,isBE)?null:'Necesitás un "Dragón Blanco de Ojos Azules" boca arriba.',
  run:pi=>{const b=UPM(pi).find(([m])=>isBE(m));if(b)b[0].noatk=G.n;MONS(O(pi)).forEach(([m,i])=>destroyM(O(pi),i,'eff'))}},
 silver:{can:pi=>G.fl.silver===G.n?'Solo 1 "Grito Plateado" por turno.':noSp()||(!free(pi)?'Tu campo está lleno.':P(pi).grave.some(isNDC)?null:'No hay Dragón Normal en tu Cementerio.'),
  run:pi=>{G.fl.silver=G.n;pickFrom(pi,pi,'grave','Grito Plateado: elegí un Dragón Normal',isNDC,'spAny')}},
 exor:{can:()=>(anyST(0)||anyST(1))?null:'No hay cartas en la zona de Mágicas/Trampas.',tg:{s:'any',p:'st',f:'exor'},tgt:'elegí una Carta Mágica (o boca abajo)',
  run:(pi,t)=>{const c=tgt(t);if(!c)return;const fd=c.fd;if(fd){c.fd=false;msg(`Se voltea ${cd(c).n}.`)}
    if(cd(c).ty=='s')destroyST(t.pi,t.z,t.i);else{c.fd=true;msg('No es una Carta Mágica: vuelve boca abajo sin activarse.')}}},
 burial:{can:pi=>P(pi).deck.some(isMonC)?null:'No hay monstruos en tu Deck.',run:pi=>pickFrom(pi,pi,'deck','Entierro Insensato: mandá 1 monstruo al Cementerio',isMonC,'toGr')},
 crush:{can:pi=>!upHas(pi,TF.dr)?'Necesitás un monstruo Dragón.':(anyST(0)||anyST(1))?null:'No hay Mágicas/Trampas en el Campo.',tg:{s:'any',p:'st',f:'any'},tgt:'elegí una Mágica/Trampa',
  run:(pi,t)=>{if(!tgt(t))return;destroyST(t.pi,t.z,t.i);lp(t.pi,-500)}},
 concord:{can:pi=>P(pi).hand.some(c=>isDC(c)&&cd(c).a<=1000)?null:'Necesitás un Dragón con 1000 ATK o menos en la mano.',
  run:pi=>pickFrom(pi,pi,'hand','Descartá 1 Dragón con 1000 ATK o menos',c=>isDC(c)&&cd(c).a<=1000,'discDraw')},
 wings:{can:pi=>upHas(pi,TF.dr5)?null:'Necesitás un Dragón de Nivel 5 o más.',tg:{s:'own',p:'mon',f:'dr5'},tgt:'elegí tu Dragón de Nivel 5+',
  run:(pi,t)=>{bounce(t.pi,t.i);destroyAllST(0);destroyAllST(1)}},
 ravine:{run:()=>{}},
 rebirth:{free:true,can:pi=>upHas(pi,TF.dr)?noSp():'Necesitás un Dragón boca arriba.',tg:{s:'own',p:'mon',f:'dr'},tgt:'elegí tu Dragón',
  run:(pi,t)=>{kill(t.pi,t.i,{how:'ban'});pickList(pi,'Renacimiento del Dragón: invocá 1 Dragón de tu mano o Cementerio',[...P(pi).hand,...P(pi).grave].filter(c=>isDC(c)&&!cd(c).fus),'spAny',null,false,false,'hg')}},
 calldam:{free:true,can:pi=>noSp()||(!free(pi)?'Tu campo está lleno.':P(pi).grave.some(isMonC)?(P(pi).st.indexOf(null)<0?'Zona llena.':null):'No hay monstruos en tu Cementerio.'),
  run:(pi,t,c)=>pickFrom(pi,pi,'grave','Llamado de los Condenados: invocá 1 monstruo',isMonC,'calldam2',{u:c.u})},
 evac:{free:true,ev:['atk'],can:()=>[0,1].some(j=>MONS(j).some(([m])=>!isSafe(m)))?null:'No hay monstruos en el Campo.',tg:{s:'any',p:'mon',f:'any'},tgt:'elegí un monstruo',run:(pi,t)=>bounce(t.pi,t.i)},
 pit:{ev:['sum'],can:(pi,c,d)=>{const m=d&&P(d.pi).field.find(x=>x&&x.u==d.u);return m&&atk(d.pi,m)>=1500?null:'Sin objetivo.'},
  run:()=>{const d=G.ev,m=d&&P(d.pi).field.find(x=>x&&x.u==d.u);if(m)kill(d.pi,P(d.pi).field.indexOf(m),{how:'ban'})}},
 souls:{can:pi=>UPM(O(pi)).some(([m])=>!isSafe(m))?null:'El rival no tiene monstruos boca arriba.',tg:{s:'opp',p:'mon',f:'up'},tgt:'elegí un monstruo boca arriba del rival',
  run:(pi,t)=>{if(destroyM(t.pi,t.i,'eff'))lp(t.pi,1000)}},
 poly:{can:pi=>noSp()||(fusable(pi).length?null:'No hay Monstruo de Fusión que puedas invocar con tus materiales.'),
  run:pi=>pickList(pi,'Polimerización: elegí el Monstruo de Fusión',fusable(pi),'polyf',null,false,true,'ext')},
 multi:{can:pi=>upHas(pi,TF.kuri)?noSp():'Necesitás un "Kuriboh" boca arriba.',tg:{s:'own',p:'mon',f:'kuri'},tgt:'elegí tu Kuriboh',
  run:(pi,t)=>{kill(t.pi,t.i,{});while(free(pi))token(pi,161,{n:'Ficha Kuriboh',at:'Oscuridad',ra:'Demonio',lv:1,a:300,d:200},'d')}},
 reborn:{can:pi=>noSp()||(!free(pi)?'Tu campo está lleno.':[0,1].some(j=>P(j).grave.some(isMonC))?null:'No hay monstruos en ningún Cementerio.'),
  run:pi=>pickList(pi,'Monstruo Renacido: elegí un monstruo de cualquier Cementerio',[...P(pi).grave,...P(O(pi)).grave].filter(isMonC),'spAny',null,false,false,'gg')},
 knives:{can:pi=>!upHas(pi,mageN)?'Necesitás un "Mago Oscuro" boca arriba.':MONS(O(pi)).some(([m])=>!isSafe(m))?null:'El rival no tiene monstruos.',tg:{s:'opp',p:'mon',f:'any'},tgt:'elegí un monstruo del rival',
  run:(pi,t)=>destroyM(t.pi,t.i,'eff')},
 stone:{can:pi=>!upHas(pi,m=>cd(m).n=='Maga Oscura')?'Necesitás una "Maga Oscura" boca arriba.':noSp()||(!free(pi)?'Tu campo está lleno.':[...P(pi).hand,...P(pi).deck].some(c=>cd(c).n=='Mago Oscuro')?null:'No hay "Mago Oscuro" en tu mano o Deck.'),
  run:pi=>pickList(pi,'La Piedra del Sabio: invocá 1 "Mago Oscuro"',[...P(pi).hand,...P(pi).deck].filter(c=>cd(c).n=='Mago Oscuro'),'spAnySh',null,false,false,'hd')},
 formula:{can:pi=>upHas(pi,TF.mag)?null:'Necesitás un "Mago Oscuro" o "Maga Oscura" boca arriba.',tg:{s:'own',p:'mon',f:'mag'},tgt:'elegí tu Mago Oscuro / Maga Oscura',run:(pi,t,c)=>equipTo(c,tgt(t))},
 laser:{can:pi=>upHas(pi,TF.ins)?null:'Necesitás un monstruo Insecto boca arriba.',tg:{s:'own',p:'mon',f:'ins'},tgt:'elegí tu Insecto',run:(pi,t,c)=>equipTo(c,tgt(t))},
 arrow:{can:pi=>P(O(pi)).st.some(c=>c&&!c.fd&&cd(c).ty=='s')||(P(O(pi)).fz)?null:'El rival no tiene Mágicas boca arriba.',
  run:pi=>{const o=O(pi);let n=0;P(o).st.forEach((c,x)=>{if(c&&!c.fd&&cd(c).ty=='s'){destroyST(o,'s',x);n++}});if(P(o).fz){destroyST(o,'z');n++}if(n)lp(o,-500*n)}},
 swords:{run:(pi,t,c)=>{c.cnt=0;MONS(O(pi)).forEach(([m])=>{m.fd=false});msg('Todos los monstruos del rival se voltean boca arriba.')}},
 carddes:{run:pi=>{[pi,O(pi)].forEach(j=>{const n=P(j).hand.length;P(j).hand.splice(0).forEach(c=>toGrave(j,c));draw(j,n)})}},
 defus:{can:()=>[0,1].some(j=>UPM(j).some(([m])=>cd(m).fus))?null:'No hay Monstruos de Fusión boca arriba.',tg:{s:'any',p:'mon',f:'fus'},tgt:'elegí un Monstruo de Fusión',
  run:(pi,t)=>{const m=tgt(t),mats=m.mats||[];bounceFus(t.pi,t.i);const gr=P(pi).grave,ok=mats.length&&mats.every(id=>gr.filter(c=>c.id==id).length>=mats.filter(x=>x==id).length)&&nfree(pi)>=mats.length&&G.nosp!==G.n;
    if(ok)mats.forEach(id=>{const c=gr.splice(gr.findIndex(g=>g.id==id),1)[0];spSum(pi,c,'a')})}},
 curtain:{can:pi=>P(pi).lp<2?'Necesitás más LP.':noSp()||(!free(pi)?'Tu campo está lleno.':P(pi).deck.some(c=>cd(c).n=='Mago Oscuro')?null:'No hay "Mago Oscuro" en tu Deck.'),
  run:pi=>{lp(pi,-Math.floor(P(pi).lp/2),true);G.nosum=G.n;pickFrom(pi,pi,'deck','Cortina de Magia Oscura: invocá 1 "Mago Oscuro"',c=>cd(c).n=='Mago Oscuro','spAnySh')}},
 mbox:{can:pi=>MONS(pi).length&&MONS(O(pi)).some(([m])=>!isSafe(m))?null:'Necesitás monstruos de ambos lados.',tg:{s:'own',p:'mon',f:'any'},tgt:'elegí uno de TUS monstruos (se destruirá)',
  run:(pi,t)=>tgReq(pi,'Caja Mística: elegí el monstruo del rival que vas a controlar','opp','mon','any','mbox2',{pi:t.pi,i:t.i,u:tgt(t).u},1)},
 dmatk:{can:pi=>!upHas(pi,mageN)?'Necesitás un "Mago Oscuro" boca arriba.':anyST(O(pi))?null:'El rival no tiene Mágicas/Trampas.',run:pi=>destroyAllST(O(pi))},
 restor:{free:true,can:()=>'Necesitás retirar 2 Contadores Mágicos (ninguna carta de este conjunto los genera).',run:()=>{}},
 mforce:{ev:['atk'],can:(pi,c,d)=>d?null:'Solo se activa cuando el rival ataca.',run:pi=>MONS(O(pi)).forEach(([m,i])=>{if(m.pos=='a')destroyM(O(pi),i,'eff')})},
 soulrope:{ev:['dest'],can:(pi,c,d)=>d&&d.pi!=pi?'No corresponde.':P(pi).lp<=1000?'Necesitás más de 1000 LP.':noSp()||(!free(pi)?'Tu campo está lleno.':P(pi).deck.some(c=>cd(c).ty=='m'&&cd(c).lv==4&&!cd(c).fus)?null:'No hay monstruos de Nivel 4 en tu Deck.'),
  run:pi=>{lp(pi,-1000,true);pickFrom(pi,pi,'deck','Cuerda de Alma: invocá 1 monstruo de Nivel 4',c=>cd(c).ty=='m'&&cd(c).lv==4&&!cd(c).fus,'spAnySh')}},
 spcirc:{free:true,can:pi=>MONS(O(pi)).some(([m])=>!isSafe(m))?null:'El rival no tiene monstruos.',tg:{s:'opp',p:'mon',f:'any'},tgt:'elegí un monstruo del rival',run:(pi,t,c)=>{c.tg=tgt(t).u}},
 cylinder:{ev:['atk'],can:(pi,c,d)=>d?null:'Solo se activa cuando el rival ataca.',run:()=>{const A=G.atk,m=A&&P(A.pi).field.find(x=>x&&x.u==A.u);if(!m)return;A.neg=true;const a=atk(A.pi,m);msg('Cilindro Mágico niega el ataque y lo devuelve.');lp(A.pi,-a)}},
 ants:{can:pi=>upHas(pi,TF.ins)&&nfree(pi)+1>=2?noSp():'Necesitás un Insecto y espacio para 2 Fichas.',tg:{s:'own',p:'mon',f:'ins'},tgt:'elegí tu Insecto para sacrificar',
  run:(pi,t)=>{kill(t.pi,t.i,{});for(let q=0;q<2;q++)token(pi,153,{n:'Ficha de Ejército de Hormigas',at:'Tierra',ra:'Insecto',lv:4,a:500,d:1200},'a')}},
 forest:{run:()=>{}},ibar:{run:()=>{}},gate:{run:()=>{}},simochi:{free:true,run:()=>{}},
 safe:{free:true,can:()=>[0,1].some(j=>UPM(j).some(([m])=>m.pos=='a'&&!isSafe(m)))?null:'No hay monstruos en Ataque boca arriba.',tg:{s:'any',p:'mon',f:'atkup'},tgt:'elegí un monstruo en Ataque',run:(pi,t,c)=>{c.tg=tgt(t).u}},
 negatk:{ev:['atk'],can:(pi,c,d)=>d?null:'Solo se activa cuando el rival ataca.',run:()=>{if(G.atk)G.atk.neg=true;G.phase='main2';msg('Se niega el ataque y termina la Fase de Batalla del rival.')}},
 dna:{free:true,run:(pi,t,c)=>{const ts=[...new Set(C.filter(x=>x.ty=='m').map(x=>x.ra))].sort();ask(pi,'Cirugía de ADN: elegí un Tipo de monstruo',ts.map(x=>[x,'dna',{u:c.u,t:x}]))}},
 peace:{run:pi=>{draw(pi);draw(O(pi));G.peace=G.n+1;msg('Un Día de Paz: nadie recibe daño hasta el final del próximo turno del rival.')}},
 duality:{can:pi=>G.fl.dual===G.n?'Solo 1 "Olla de la Dualidad" por turno.':P(pi).deck.length<3?'Necesitás 3 cartas en el Deck.':null,
  run:pi=>{G.fl.dual=G.n;G.nosp=G.n;pickList(pi,'Olla de la Dualidad: elegí 1 de las 3 cartas superiores',P(pi).deck.slice(-3),'dual',null,false,false,'deck')}},
 goblin:{run:pi=>{draw(pi);lp(O(pi),1000)}},
 waboku:{free:true,ev:['atk'],run:pi=>{G.wab={n:G.n,pi};msg('Waboku: sin daño de batalla y tus monstruos no se destruyen en batalla este turno.')}},
 gift:{free:true,run:pi=>lp(O(pi),3000)},
 roar:{ev:['bp'],can:(pi)=>pi==G.turn?'Se activa en la Fase de Batalla del rival.':null,run:()=>{G.roar=G.n;msg('Rugido Amenazante: el rival no puede atacar este turno.')}},
 yata:{free:true,run:pi=>draw(pi)},pot:{free:true,run:pi=>draw(pi)},
 fortune:{free:true,can:()=>'Solo se activa como Eslabón de Cadena 4 o más (este modo no usa cadenas largas).',run:()=>{}},
 hope:{free:true,can:pi=>P(O(pi)).lp-P(pi).lp<1000?'El rival debe tener 1000 LP más que vos.':P(pi).lp<=1000?'Necesitás más de 1000 LP.':null,
  run:pi=>{lp(pi,-1000,true);draw(pi,Math.max(0,Math.floor((P(O(pi)).lp-P(pi).lp)/2000)))}},
 greed:{free:true,run:pi=>{draw(pi,2);P(pi).skip=2}}
};
function bounceFus(pi,i){const p=P(pi),m=p.field[i];p.field[i]=null;leave(pi,m);p.ext.push(stripc(m));msg(`${nm(m)} vuelve al Deck Extra.`)}
// Efectos de monstruos activables
const ACT={
 timew:{can:(pi,m)=>G.phase=='battle'?'Solo en la Fase Principal.':m.ef===G.n?'Ya lo usaste este turno.':null,run:(pi,m)=>{m.ef=G.n;ask(pi,'Mago del Tiempo: elegí cara o cruz',[['Cara','coin',{c:1}],['Cruz','coin',{c:0}]])}},
 catap:{can:(pi,m)=>G.phase=='battle'?'Solo en la Fase Principal.':m.ef===G.n?'Ya lo usaste este turno.':null,run:(pi,m)=>{m.ef=G.n;tgReq(pi,'Tortuga Catapulta: sacrificá 1 monstruo','own','mon','any','catap',null,0)}},
 jz2:{can:(pi,m)=>m.ef===G.n?'Ya lo usaste este turno.':P(O(pi)).st.some(c=>c&&!c.fd&&cd(c).ty=='p')?null:'El rival no tiene Trampas boca arriba.',
  run:(pi,m)=>{m.ef=G.n;const o=O(pi);let n=0;P(o).st.forEach((c,x)=>{if(c&&!c.fd&&cd(c).ty=='p'){destroyST(o,'s',x);n++}});lp(o,-300*n)}},
 genesis:{can:(pi,m)=>m.ef===G.n?'Ya lo usaste este turno.':P(pi).hand.some(isDC)&&P(pi).grave.some(isDC)?null:'Necesitás un Dragón en la mano y otro en el Cementerio.',
  run:(pi,m)=>{m.ef=G.n;pickFrom(pi,pi,'hand','Dragón del Génesis: descartá 1 Dragón',isDC,'gen1')}},
 stormd:{can:(pi,m)=>!m.gem?'Primero Invocala de nuevo (Gemini).':m.ef===G.n?'Ya lo usaste este turno.':P(pi).st.some(c=>c&&!c.fd)?null:'No tenés Mágicas/Trampas boca arriba.',
  run:(pi,m)=>{m.ef=G.n;tgReq(pi,'Dragón Tormentaoscura: mandá 1 Mágica/Trampa boca arriba tuya al Cementerio','own','st','stup','stormd',null,0)}}
};
const AK={none:()=>{},
 trap:(pi,d)=>{G.ev=d.data;const c=P(pi).st[d.i];if(c)startCard(pi,'s',d.i,cd(c).k,d.ev)},
 kuri:pi=>{const c=P(pi).hand.find(x=>cd(x).k=='kuri');if(c){take(pi,'hand',c.u);toGrave(pi,c);msg('Kuriboh se descarta: no hay daño de batalla.');if(G.plan&&G.plan.to==pi)G.plan.dmg=0}},
 coin:(pi,d)=>{const h=Math.random()<.5?1:0,ok=h==d.c;msg(`Moneda: salió ${h?'cara':'cruz'}.`);
   if(ok){MONS(O(pi)).forEach(([m,i])=>destroyM(O(pi),i,'eff'));msg('¡Acertaste! Se destruyen los monstruos del rival.');
     if([...P(pi).hand,...P(pi).deck].some(c=>cd(c).k=='sage')&&upHas(pi,mageN))ask(pi,'¿Invocar a Sabio Oscuro sacrificando un Mago Oscuro?',[['Sí','sage',null],['No','none',null]])}
   else{let s=0;MONS(pi).forEach(([m,i])=>{s+=atk(pi,m)});MONS(pi).forEach(([m,i])=>destroyM(pi,i,'eff'));msg('Fallaste: se destruyen tus monstruos.');lp(pi,-Math.floor(s/2))}},
 sage:pi=>{const j=UPM(pi).find(([m])=>mageN(m));if(!j)return;const[m,i]=j;P(pi).field[i]=null;leave(pi,m);toGrave(pi,m);
   let c=P(pi).hand.find(x=>cd(x).k=='sage');if(c)take(pi,'hand',c.u);else{c=P(pi).deck.find(x=>cd(x).k=='sage');take(pi,'deck',c.u);shuffle(P(pi).deck)}spSum(pi,c,'a')},
 dna:(pi,d)=>{const c=P(pi).st.find(x=>x&&x.u==d.u);if(c){c.dt=d.t;msg(`Cirugía de ADN: todos los monstruos son de Tipo ${d.t}.`)}}};
const PK={
 toHand:(pi,c)=>{if(!c)return;P(pi).hand.push(c);msg(`${cd(c).n} va a la mano.`);chkEx(pi)},
 toHandSh:(pi,c)=>{PK.toHand(pi,c);shuffle(P(pi).deck)},
 toGr:(pi,c)=>{if(c)toGrave(pi,c)},
 shr1:(pi,c)=>{toGrave(pi,c);if(!cd(c).k)pickFrom(pi,pi,'deck','Opcional: mandá otro Dragón al Cementerio',isDC,'toGr',null,true)},
 discDraw:(pi,c)=>{toGrave(pi,c);draw(pi,2)},
 spAny:(pi,c)=>{if(c&&!spSum(pi,c,'a'))toGrave(pi,c)},
 spAnySh:(pi,c)=>{PK.spAny(pi,c);shuffle(P(pi).deck)},
 spHand:(pi,c)=>{if(c)spSum(pi,c,'a')},
 calldam2:(pi,c,d)=>{const m=spSum(pi,c,'a');if(!m){toGrave(pi,c);return}const k=P(pi).st.find(x=>x&&x.u==d.u);if(k)k.tg=m.u},
 polyf:(pi,c)=>{if(c)fuse(pi,c,false)},
 gatef:(pi,c)=>{if(c)fuse(pi,c,true)},
 dual:(pi,c)=>{PK.toHand(pi,c);shuffle(P(pi).deck)},
 gen1:(pi,c)=>{toGrave(pi,c);pickFrom(pi,pi,'grave','Dragón del Génesis: añadí 1 Dragón del Cementerio',isDC,'toHand')},
 rav1:(pi,c)=>{toGrave(pi,c);pickFrom(pi,pi,'deck','Barranco del Dragón: mandá 1 Dragón al Cementerio',isDC,'toGr')}};
const TG={
 card:(it,t)=>resolveCard(it.data.pi,it.data.z,it.data.i,it.data.k,t),
 iqs:(it,t)=>kill(t.pi,t.i,{}),
 clown:(it,t)=>{destroyM(t.pi,t.i,'eff')},clown2:(it,t)=>bounce(t.pi,t.i),eater:(it,t)=>{destroyM(t.pi,t.i,'eff')},
 reaper:(it,t)=>{const c=tgt(t);if(!c)return;if(c.fd){c.fd=false;msg(`Se revela ${cd(c).n}.`)}
   if(cd(c).ty=='p')destroyST(t.pi,t.z,t.i);else{c.fd=true;msg('Era una Mágica: vuelve boca abajo.')}},
 mbox2:(it,t)=>{const d=it.data,xi=P(d.pi).field.findIndex(m=>m&&m.u==d.u);if(xi>=0)destroyM(d.pi,xi,'eff');
   const m=tgt(t);if(!m||!free(G.turn)&&0)return;const me_=it.pi;if(!free(me_)){msg('No hay espacio para controlarlo.');return}
   P(t.pi).field[t.i]=null;leave(t.pi,m);P(me_).field[P(me_).field.indexOf(null)]=m;m.t=G.n;msg(`Tomás el control de ${nm(m)}.`)},
 catap:(it,t)=>{const m=tgt(t),a=Math.floor(atk(t.pi,m)/2);kill(t.pi,t.i,{});msg(`Tortuga Catapulta: ${a} de daño al rival.`);lp(O(it.pi),-a)},
 stormd:(it,t)=>{const c=tgt(t);if(c){destroyST(t.pi,t.z,t.i)}destroyAllST(0);destroyAllST(1)}};
function tgValid(it,pi,z,i){
  if(!it||it.k!='tg')return false;
  if(it.s=='own'&&pi!=it.pi||it.s=='opp'&&pi==it.pi)return false;
  if(it.p=='mon'){if(z!='m')return false;const m=P(pi).field[i];if(!m||(it.data&&it.data.u&&it.act=='eater'&&m.u==it.data.u&&0))return false;if(!it.ns&&it.act!='catap'&&isSafe(m))return false;if(it.act=='iqs'&&m.u==it.data.u)return false;return TF[it.f](m)}
  if(it.p=='st'){if(z=='m')return false;const c=z=='s'?P(pi).st[i]:P(pi).fz;return !!c&&TF[it.f](c)}
  return false}
function tgDone(it,pi,z,i){G.mode=null;TG[it.act](it,{pi,i,z});ui()}
function changePos(i){const pi=G.turn,m=me().field[i];
  if(G.phase=='battle'||m.t===G.n||m.moved||m.atkd)return say('Ese monstruo no puede cambiar de posición ahora.');
  if(m.stuck)return say(`${nm(m)} no puede cambiar de posición hasta el final de tu próximo turno.`);
  if(frozen(m))return say('Círculo Atahechizos lo inmoviliza.');
  if(!m.fd&&cls(m)=='Insecto'&&UPM(O(pi)).some(([x])=>KK(x)=='ibprin'))return say('Princesa Insecto mantiene a los Insectos en Ataque.');
  if(m.fd){const pup=pups();m.fd=false;m.pos='a';msg(`Invocación de Volteo: ${nm(m)}.`);titi(pup);flipFx(pi,m,true);if(atk(pi,m)>=1500)offer(O(pi),'sum',{u:m.u,pi})}
  else{m.pos=m.pos=='a'?'d':'a';msg(`${nm(m)} pasa a ${m.pos=='a'?'ataque':'defensa'}.`);
    if(m.pos=='d'&&MONS(O(pi)).length){if(KK(m)=='payaso')tgReq(pi,'Payaso del Sueño: destruí 1 monstruo rival','opp','mon','any','clown',null,1);
      if(KK(m)=='clown2')tgReq(pi,'Payaso Craso: devolvé 1 monstruo rival a la mano','opp','mon','any','clown2',null,1)}
    if(KK(m)=='sab'&&m.pos=='d'){shuffle(me().deck);msg('Sabiduría Manchada: barajás tu Deck.')}}
  m.moved=true;snd(330);ui()}
function setFD(i){const m=me().field[i];if(m.fdt||m.atkd||G.phase=='battle')return say('Ya lo usaste este turno.');
  m.fd=true;m.pos='d';m.fdt=true;msg(`${nm(m)} se pone boca abajo.`);snd(300);ui()}
function gemSummon(i){const m=me().field[i];if(G.summoned||!canSum())return say('Ya hiciste tu Invocación Normal este turno.');m.gem=1;G.summoned=true;msg(`${nm(m)}: Invocación Gemini, ahora tiene efecto.`);ui()}
function useAct(i){const pi=G.turn,m=me().field[i],a=ACT[KK(m)];const w=a.can&&a.can(pi,m);if(w)return say(w);G.sel=null;a.run(pi,m);ui()}
function ravineAct(){const pi=G.turn;if(G.fl.ravine===G.n)return say('Ya lo usaste este turno.');if(!me().hand.length||!me().deck.some(isDC))return say('Necesitás una carta en la mano y un Dragón en el Deck.');
  G.fl.ravine=G.n;G.sel=null;pickFrom(pi,pi,'hand','Barranco del Dragón: descartá 1 carta',()=>true,'rav1');ui()}
function gateAct(){const pi=G.turn,l=fusable(pi);if(!l.length)return say('No tenés materiales para ninguna Fusión.');if(noSp())return say(noSp());G.sel=null;pickList(pi,'Puerta de Fusión: elegí el Monstruo de Fusión',l,'gatef',null,false,true,'ext');ui()}

// ===== Interfaz =====
const TOL=10,LPMS=400,pIdx=sd=>sd=='b'?G.turn:1-G.turn;
function buildBoard(){
  const B=$('#board');B.innerHTML='';
  const cell=(c,r,col)=>{const z=el('div','z '+c);z.style.gridArea=r+'/'+col;B.append(z);return z};
  ['t','b'].forEach(sd=>{const t=sd=='t',s=Z[sd]={m:[],s:[]},rm=t?2:4,rs=t?1:5;
    for(let i=0;i<SLOTS;i++){const z=cell('mz '+sd,rm,i+2);press(z,()=>zcard(sd,i),()=>zoneClick(sd,i));s.m.push(z);
      const q=cell('sz '+sd,rs,i+2);press(q,()=>stcard(sd,i),()=>stClick(sd,i));s.s.push(q)}
    s.gy=cell('u gy '+sd,rm,t?1:7);s.dk=cell('u dk '+sd,rs,t?1:7);s.fz=cell('u fs '+sd,rm,t?7:1);s.ed=cell('u ed '+sd,rs,t?7:1);
    press(s.gy,()=>topGrave(sd),()=>openGy(sd));press(s.fz,()=>fzcard(sd),()=>fzClick(sd));press(s.ed,()=>null,()=>openExt(sd))});
  cell('xz',3,3);cell('xz',3,5);
  const pc=(ar,...n)=>{const d=el('div','pc');d.style.gridArea=ar;d.append(...n);B.append(d)};
  pc('3/1/4/3',$('#chips'));pc('3/6/4/8',$('#nextBtn'),$('#endBtn'))}
function zcard(sd,i){const pi=pIdx(sd),m=P(pi).field[i];return m&&(!m.fd||pi==G.turn)?{c:m,pi,f:true}:null}
function stcard(sd,i){const pi=pIdx(sd),c=P(pi).st[i];return c&&(!c.fd||pi==G.turn)?{c,pi,f:false}:null}
function fzcard(sd){const pi=pIdx(sd),c=P(pi).fz;return c?{c,pi,f:false}:null}
function topGrave(sd){const pi=pIdx(sd),g=P(pi).grave;return g.length?{c:g[g.length-1],pi,f:false}:null}
function view(h,list,pi){const v=$('#gyv');v.innerHTML=`<h3>${h}</h3><div class="g"></div><p><button>Cerrar</button></p>`;
  list.forEach(c=>{const w=el('div','gc',`<img src="${img(c.id)}">`);press(w,()=>({c,pi,f:false}),()=>{});$('.g',v).append(w)});
  $('button',v).onclick=()=>v.hidden=true;v.hidden=false}
function openGy(sd){const pi=pIdx(sd),p=P(pi);view(`Cementerio del Jugador ${pi+1} (${p.grave.length}) · Desterradas (${p.ban.length})`,[...p.grave,...p.ban],pi)}
function openExt(sd){const pi=pIdx(sd);if(pi!=G.turn||G.curtain)return say(`Deck Extra del rival: ${P(pi).ext.length} cartas.`);view(`Tu Deck Extra (${P(pi).ext.length})`,P(pi).ext,pi)}
function zoneClick(sd,i){
  if(G.over||G.curtain||G.ask)return;
  const pi=pIdx(sd),m=P(pi).field[i],md=G.mode,k=md&&md.k;
  if(k=='tg'){if(tgValid(md,pi,'m',i))tgDone(md,pi,'m',i);return}
  if(k=='trib'&&pi==G.turn&&m&&!m.nt){const s=md.sel,j=s.indexOf(i);j>=0?s.splice(j,1):s.push(i);if(s.length==md.nd)return place(md.h,md.pos,s);return ui()}
  if(k=='atk'&&pi!=G.turn&&m)return attack(md.i,i);
  if(!m&&pi==G.turn&&!k&&G.phase!='battle'&&G.sel&&G.sel.z=='h'){const c=me().hand[G.sel.i];if(c&&cd(c).ty=='m'&&!SPK.has(cd(c).k)&&!cd(c).dead)return summon(G.sel.i,'a',i)}
  G.sel=m?{z:'f',pi,i}:null;if(k!='disc')G.mode=null;ui()}
function stClick(sd,i){if(busy())return;const pi=pIdx(sd),c=P(pi).st[i],md=G.mode,k=md&&md.k;
  if(k=='tg'){if(tgValid(md,pi,'s',i))tgDone(md,pi,'s',i);return}
  G.sel=c?{z:'s',pi,i}:null;if(k!='disc')G.mode=null;ui()}
function fzClick(sd){if(busy())return;const pi=pIdx(sd),c=P(pi).fz,md=G.mode,k=md&&md.k;
  if(k=='tg'){if(tgValid(md,pi,'z',0))tgDone(md,pi,'z',0);return}
  G.sel=c?{z:'z',pi}:null;if(k!='disc')G.mode=null;ui()}
function showZoom(o){const c=cd(o.c),z=$('#zoom'),mon=c.ty=='m',a=o.f&&mon?atk(o.pi,o.c):c.a,d=o.f&&mon?dfn(o.pi,o.c):c.d;
  const meta=mon?`${c.at} · ${cls(o.c)}${o.f&&o.c.fd?' · Boca abajo':''}`:`Carta de ${c.at}${c.ra&&c.ra!='Normal'?' · '+c.ra:''}`;
  z.innerHTML=`<img src="${big(o.c.id)}"><div class="zt"><h2>${c.n}</h2><p class="mt">${meta}</p>${mon?`<div class="lv">${'★'.repeat(Math.min(c.lv,12))}</div><div class="sx"><span>ATK<b>${c.k=='slifer'?'?':a}</b></span><span>DEF<b>${c.k=='slifer'?'?':d}</b></span><span>NIVEL<b>${c.lv}</b></span></div>`:''}<p class="fx">${c.x||'Monstruo Normal, sin efecto.'}</p>${c.dead?'<p class="mt">⚠ Esta carta necesita una carta que no existe en este conjunto.</p>':''}</div>`;
  z.hidden=false;void z.offsetWidth;z.classList.add('on')}
function hideZoom(){const z=$('#zoom');z.classList.remove('on');setTimeout(()=>{if(!z.classList.contains('on'))z.hidden=true},260)}
const canDrag=h=>!busy()&&G.phase!='battle'&&!G.mode&&me().hand[h]&&cd(me().hand[h]).ty=='m'&&!SPK.has(cd(me().hand[h]).k)&&!cd(me().hand[h]).dead;
function press(e,get,tap,hi,dz,sc){
  e.onpointerdown=ev=>{if(ev.button>0)return;ev.preventDefault();
    const x0=ev.clientX,y0=ev.clientY;let lp_=false,mv=false,gh=null,over=null,lx=x0,ly=y0,py=y0,armed=!dz;
    try{e.setPointerCapture(ev.pointerId)}catch(x){}
    e.classList.add('lift');
    const t=setTimeout(()=>{const o=get();if(o){lp_=true;showZoom(o)}},LPMS),ta=dz&&setTimeout(()=>armed=true,160);
    e.onpointermove=m=>{lx=m.clientX;ly=m.clientY;
      if(lp_)return;
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
      if(ok&&!lp_&&!mv)tap()};
    e.onpointerup=()=>end(true);e.onpointercancel=()=>end(false)}}
function tapHand(i){if(busy())return;if(G.mode&&G.mode.k=='disc')return discard(i);
  if(G.mode&&G.mode.k=='tg')return;
  G.mode=null;G.sel=G.sel&&G.sel.z=='h'&&G.sel.i==i?null:{z:'h',i};ui()}
function tween(e,pi,to){const from=shown[pi],t0=performance.now();shown[pi]=to;
  (function f(t){const k=Math.min(1,(t-t0)/500);e.textContent=Math.round(from+(to-from)*k)+' LP';if(k<1)requestAnimationFrame(f)})(t0)}
function hud(id,pi){const p=P(pi),h=$(id);$('.nm',h).textContent='Jugador '+(pi+1);$('.lpb i',h).style.width=Math.min(100,p.lp/LP0*100)+'%';
  const l=$('.lpb span',h);shown[pi]!==p.lp?tween(l,pi,p.lp):l.textContent=p.lp+' LP'}
function zones(sd,pi){const p=P(pi),s=Z[sd],md=G.mode,k=md&&md.k,mine=pi==G.turn,S=G.sel,
  hc=mine&&S&&S.z=='h'&&me().hand[S.i],vm=hc&&cd(hc).ty=='m'&&!SPK.has(cd(hc).k)&&!cd(hc).dead&&G.phase!='battle'&&!G.summoned&&!G.mode;
  p.field.forEach((m,i)=>{let c='z mz '+sd;
    if(m){c+=' has';if(S&&S.z=='f'&&S.pi==pi&&S.i==i)c+=' sel';if(k=='atk'&&!mine)c+=' tgt';if(k=='tg'&&tgValid(md,pi,'m',i))c+=' tgt';
      if(k=='trib'&&mine&&!m.nt)c+=md.sel.includes(i)?' on':' trb';if(m.u==G.fresh)c+=' new'}
    else if(vm&&mine)c+=' valid';
    s.m[i].className=c;s.m[i].innerHTML=m?`<img class="${m.pos=='d'?'def':''}" src="${m.fd?BACK:img(m.id)}">`:''});
  p.st.forEach((c,i)=>{let cl='z sz '+sd;if(c){cl+=' has';if(S&&S.z=='s'&&S.pi==pi&&S.i==i)cl+=' sel';if(k=='tg'&&tgValid(md,pi,'s',i))cl+=' tgt'}
    s.s[i].className=cl;s.s[i].innerHTML=c?`<img class="${c.fd&&mine?'mine':''}" src="${c.fd?BACK:img(c.id)}">`:''});
  let fc='z u fs '+sd;if(p.fz){fc+=' has';if(S&&S.z=='z'&&S.pi==pi)fc+=' sel';if(k=='tg'&&tgValid(md,pi,'z',0))fc+=' tgt'}
  s.fz.className=fc;s.fz.innerHTML=p.fz?`<img src="${img(p.fz.id)}">`:'';
  s.ed.className='z u ed '+sd+(p.ext.length?' has':'');s.ed.innerHTML=p.ext.length?`<img class="ext" src="${BACK}"><span class="cnt">${p.ext.length}</span>`:'';
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
  if(busy())return;const md=G.mode,m=md&&md.k;
  if(m=='tg'){if(!md.nc)add('Cancelar',()=>{G.mode=null;G.Q=[];ui()},'r');return}
  if(m&&m!='disc'&&m!='peek')return add('Cancelar',()=>{G.mode=null;ui()},'r');
  if(m)return;
  const s=G.sel;if(!s||s.pi!=null&&s.pi!=G.turn)return;const main=G.phase!='battle';
  if(s.z=='h'){const c=me().hand[s.i];if(!c)return;const d=cd(c);
    if(d.ty=='m'){if(main){if(SPK.has(d.k)||d.dead)add('Invocación Especial',()=>special(s.i));else{add('Invocar',()=>summon(s.i,'a'));add('Colocar',()=>summon(s.i,'s'))}}}
    else if(d.ty=='s'){if(main||d.ra=='Juego Rápido')add('Activar',()=>actCard('h',s.i));if(main&&d.ra!='Campo')add('Colocar',()=>setST(s.i))}
    else if(main)add('Colocar trampa',()=>setST(s.i))}
  else if(s.z=='f'){const c=me().field[s.i];if(!c)return;
    if(main){if(KK(c)=='sig'&&!c.fd)add('Boca abajo',()=>setFD(s.i));if(KK(c)=='stormd'&&!c.gem&&!c.fd)add('Invocar (Gemini)',()=>gemSummon(s.i));
      if(!c.fd&&ACT[KK(c)])add('Efecto',()=>useAct(s.i));add(c.fd?'Invocar (Volteo)':'Cambiar posición',()=>changePos(s.i))}
    else add('⚔️ Atacar',()=>startAtk(s.i),'r')}
  else if(s.z=='s'){const c=me().st[s.i];if(c&&c.fd)add('Activar',()=>actCard('s',s.i))}
  else if(s.z=='z'){if(main){if(P(s.pi).fz&&cd(P(s.pi).fz).k=='ravine')add('Efecto',ravineAct);if(gateOn())add('Fusionar',gateAct)}}}
function modal(){const md=$('#gyv'),a=G.ask,pk=md.dataset.pk;
  const show=h=>{md.innerHTML=h;md.hidden=false;md.dataset.pk=1};
  if(a){
    if(a.pi!=G.turn&&!a.ok&&!G.over){show(`<div><h2>Jugador ${a.pi+1}</h2><p>Pasale el celular al Jugador ${a.pi+1} y tocá Continuar.</p><button>Continuar</button></div>`);$('button',md).onclick=()=>{a.ok=true;ui()};md.classList.add('pass');return}
    md.classList.remove('pass');
    if(a.k=='ask'){show(`<h3>${a.t}</h3><div class="ob"></div>`);a.o.forEach((o,j)=>{const b=el('button','nb',o[0]);b.onclick=()=>answer(j);$('.ob',md).append(b)})}
    else{show(`<h3>${a.t}</h3><div class="g"></div>${a.opt?'<p><button class="nb">Omitir</button></p>':''}`);
      a.list.forEach((c,j)=>{const w=el('div','gc',`<img src="${img(c.id)}">`);press(w,()=>({c,pi:a.pi,f:false}),()=>chosen(j));$('.g',md).append(w)});
      if(a.opt)$('button',md).onclick=()=>chosen(-1)}
    return}
  if(G.mode&&G.mode.k=='peek'){const M=G.mode;
    show(`<h3>Jugador ${M.pi+1} · Gran Ojo: tocá las cartas en el orden que querés (la primera queda arriba)</h3><div class="g"></div>`);
    M.cards.forEach((c,i)=>{const on=M.ord.indexOf(i),w=el('div','gc',`<img src="${img(c.id)}">${on>=0?`<span class="cnt">${on+1}</span>`:''}`);
      press(w,()=>({c,pi:M.pi,f:false}),()=>{if(M.ord.includes(i))return;M.ord.push(i);
        if(M.ord.length==M.cards.length){const p=P(M.pi),n=M.cards.length;p.deck.splice(p.deck.length-n,n,...M.ord.map(j=>M.cards[j]).reverse());G.mode=null;msg('Gran Ojo: reordenaste el tope del Deck.')}ui()});$('.g',md).append(w)});return}
  if(pk){md.hidden=true;delete md.dataset.pk;md.classList.remove('pass')}}
function hintText(){const md=G.mode,k=md&&md.k;
  return k=='trib'?`Elegí ${md.nd-md.sel.length} tributo(s) de tu campo`:k=='atk'?'Elegí un objetivo rival':k=='tg'?md.t:k=='disc'?`Descartá ${me().hand.length-HLIM} carta(s) de tu mano`:''}
function render(){
  hud('#hudB',G.turn);hud('#hudT',1-G.turn);zones('b',G.turn);zones('t',1-G.turn);
  $('.oh',$('#hudT')).innerHTML=op().hand.map(()=>`<img src="${BACK}">`).join('');
  const ph=[['main','Principal'],['battle','Batalla'],['main2','Principal 2']];
  $('#chips').innerHTML=`<b>Turno ${G.n}</b>`+ph.map(([k,l])=>`<b class="${G.phase==k?'on':''}">${l}</b>`).join('');
  const nb=$('#nextBtn');nb.textContent=G.phase=='main'?(G.n===1?'Sin batalla':'Batalla'):'Fase 2';nb.disabled=!!(busy()||G.mode||G.phase=='main2');
  $('#endBtn').disabled=!!(busy()||(G.mode&&G.mode.k!='disc'));
  $('#logPanel ol').innerHTML=G.log.map(l=>`<li>${l}</li>`).join('');
  const ht=hintText();$('#hint').textContent=ht;$('#hint').hidden=!ht;
  hand();acts();modal();
  const c=$('#curtain');c.hidden=!(G.over||G.curtain);
  if(G.over){c.innerHTML=`<div><h2>🏆 Gana el Jugador ${G.over.w+1}</h2><p>${G.over.why}</p><button>Nueva partida</button></div>`;$('button',c).onclick=()=>{$('#menu').hidden=true;newGame()}}
  else if(G.curtain){c.innerHTML=`<div><h2>Turno del Jugador ${G.turn+1}</h2><p>Turno ${G.n}. Pasale el celular y tocá para ver tu mano.</p><button>Continuar</button></div>`;$('button',c).onclick=()=>{G.curtain=false;ui()}}}
const save=()=>{try{localStorage.setItem(KEY,JSON.stringify(G))}catch(e){}};
function ui(){statics();flush();save();render()}

// ===== Menú y constructor de mazos =====
const norm=t=>t.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');
const okFus=[73,134,141,147,173,218];
function randomDeck(){const pool=C.filter(c=>!c.fus&&!c.dead).map(c=>c.id),d=[];
  while(d.length<40){const id=pool[Math.random()*pool.length|0];if(d.filter(x=>x==id).length<3)d.push(id)}
  shuffle([...okFus]).slice(0,3).forEach(id=>d.push(id));return d.sort((a,b)=>a-b)}
const mainN=a=>a.filter(i=>!C[i-1].fus).length,extN=a=>a.filter(i=>C[i-1].fus).length;
function loadDecks(){let d;try{d=JSON.parse(localStorage.getItem('duel-decks-v2'))}catch(e){}
  DK=[0,1].map(i=>d&&Array.isArray(d[i])&&d[i].every(x=>C[x-1])&&mainN(d[i])>=40&&mainN(d[i])<=60&&extN(d[i])<=MAXX?d[i]:randomDeck())}
const saveDecks=()=>{try{localStorage.setItem('duel-decks-v2',JSON.stringify(DK))}catch(e){}};
function showMenu(){$('#builder').hidden=true;$('#menu').hidden=false;$('#bCont').hidden=!SAVED;
  $('#mi').textContent=`Jugador 1: ${mainN(DK[0])} + ${extN(DK[0])} extra · Jugador 2: ${mainN(DK[1])} + ${extN(DK[1])} extra`}
function startDuel(){const bad=DK.findIndex(d=>mainN(d)<40||mainN(d)>60);
  if(bad>=0){say(`El mazo del Jugador ${bad+1} debe tener entre 40 y 60 cartas.`);return openBuilder(bad)}
  $('#menu').hidden=true;SAVED=null;newGame()}
let BD=[],BI=0;
const cnt=id=>BD.filter(x=>x==id).length;
function openBuilder(pi){BI=pi;BD=[...DK[pi]].sort((a,b)=>a-b);$('#menu').hidden=true;$('#builder').hidden=false;
  $('#bT').textContent=`Mazo del Jugador ${pi+1}`;$('#q').value='';$('#flt').value='';drawB()}
function addC(id){const c=C[id-1];
  if(cnt(id)>=3)return say('Solo puede haber 3 copias de la misma carta.');
  if(c.fus){if(extN(BD)>=MAXX)return say('El Deck Extra admite hasta 15 cartas.')}else if(mainN(BD)>=60)return say('El mazo principal ya tiene 60 cartas.');
  if(c.dead)say('Aviso: esta carta necesita otra carta que no existe en este conjunto.');
  BD.push(id);BD.sort((a,b)=>a-b);snd(600,.06);drawB()}
function delC(i){BD.splice(i,1);snd(300,.06);drawB()}
function tile(id,tap,dz,n,cl){const c=C[id-1],w=el('div','tile'+(n>=3?' full':'')+(cl?' '+cl:'')+(c.dead?' dead':''),`<img loading="lazy" src="${img(id)}">${n?`<span class="cnt">${n}/3</span>`:''}${c.dead?'<i class="bad">!</i>':''}`);
  press(w,()=>({c:{id},pi:0,f:false}),tap,null,dz,true);return w}
function drawB(){
  $('#bC').textContent=`Principal ${mainN(BD)}/60 (mín. 40) · Extra ${extN(BD)}/${MAXX}`;
  const ord=[...BD.map((id,i)=>({id,i}))].sort((a,b)=>C[a.id-1].fus-C[b.id-1].fus||a.i-b.i);
  $('#dk').replaceChildren(...ord.map(o=>tile(o.id,()=>delC(o.i),null,0,C[o.id-1].fus?'ex':'')));
  const q=norm($('#q').value),f=$('#flt').value;
  $('#col').replaceChildren(...C.filter(c=>(!q||norm(c.n).includes(q))&&(!f||(f=='m'?c.ty=='m'&&!c.fus:f=='s'?c.ty=='s':f=='p'?c.ty=='p':c.fus)))
    .map(c=>tile(c.id,()=>addC(c.id),['#dk',()=>addC(c.id)],cnt(c.id),c.fus?'ex':'')))}

// ===== Inicio =====
$('#bPlay').onclick=startDuel;
$('#bCont').onclick=()=>{G=SAVED;SAVED=null;G.curtain=true;uid=1e6;shown=[P(0).lp,P(1).lp];$('#menu').hidden=true;render()};
$('#bD1').onclick=()=>openBuilder(0);$('#bD2').onclick=()=>openBuilder(1);
$('#bRnd').onclick=()=>{BD=randomDeck();drawB()};$('#bClr').onclick=()=>{BD=[];drawB()};
$('#bOk').onclick=()=>{if(mainN(BD)<40)return say('El mazo principal necesita al menos 40 cartas.');DK[BI]=[...BD];saveDecks();showMenu()};$('#bNo').onclick=showMenu;
$('#q').oninput=$('#flt').onchange=drawB;
$('#nextBtn').onclick=nextPhase;$('#endBtn').onclick=endTurn;
$('#logBtn').onclick=()=>$('#logPanel').toggleAttribute('hidden');
$('#muteBtn').onclick=e=>{mute=!mute;e.target.textContent=mute?'🔇':'🔊'};
$('#restartBtn').onclick=()=>{if(G&&!G.over)try{SAVED=JSON.parse(JSON.stringify(G))}catch(e){}showMenu()};
document.addEventListener('contextmenu',e=>e.preventDefault());
buildBoard();loadDecks();
(function init(){let s;try{s=JSON.parse(localStorage.getItem(KEY))}catch(e){}
  SAVED=s&&s.p&&!s.over&&s.p[0].st&&Array.isArray(s.Q)?s:null;showMenu()})();
window.addEventListener('resize',()=>G&&hand());
