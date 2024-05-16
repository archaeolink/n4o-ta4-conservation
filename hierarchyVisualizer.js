async function readSheet(method) {
  /*
  if (method == 0) {
    let tsvData = await readSheetFromUrl();
    
  } else {
    let tsvData = readSheetFromFile();
  }
  //const cleanedTsvData = cleanTableData(tsvData);
  document.getElementById("sheetButton").innerHTML = tsvData
  document.getElementById("fileButton").innerHTML = tsvData
  */
  
  const thesaurus = `identifier	Qidentifier	hierarcylevel	type	prefLabel	altLabel	translation	description	parent	parentQ	related	relatedQ	source	creator	closeMatch	relatedMatch	seeAlso	example
B51DAF	Q12	0	Q2	Werkstoff	Material		Material aus dem das Objekt besteht.	top					Q7|Q8				https://n4o-ta4-dev.wikibase.cloud/wiki/Item:Q12
B5DD1A		1	Q2	Metall	Metalle	metal@en|métal@fr	Gruppe chemischer Elemente	B51DAF	Q12				Q7|Q8	http://www.wikidata.org/entity/Q11426			
FGA46A		2	Q2	Edelmetall	Edelmetalle	nobel metal@en	chemisches Element mit hoher Korrosionsbeständigkeit	B5DD1A					Q7|Q8	https://www.wikidata.org/wiki/Q585302			
FD5149		3	Q2	Gold		gold@en											
DC5B2B		3	Q2	Goldlegierung	Goldlegierungen	gold alloy@en	Legierung mit Gold als Hauptbestandteil	FGA46A					Q7|Q8	https://www.wikidata.org/wiki/Q37136268|http://vocab.getty.edu/page/aat/300010963	https://cameo.mfa.org/wiki/Gold		
FD5149		3	Q2	Silber		silver@en											
AD789F		3	Q2	Silberlegierung	Silberlegierungen	silver alloy@en	legierung mit Silber als Hauptbestandteil	FGA46A					Q7|Q8	https://www.wikidata.org/wiki/Q52895784|http://vocab.getty.edu/page/aat/300010975	https://cameo.mfa.org/wiki/Silver		
BBF566		2	Q2	unedles Metal	unedle Metalle	base metal@en	Metalle, die aufgrund ihres hohen Lösungsdrucks, unter Normalbedingungen zur Korrosion neigen	B5DD1A					Q7|Q8	https://www.wikidata.org/wiki/Q428855|http://vocab.getty.edu/page/aat/300241615			
F71C6B		3	Q2	Eisen	Fe|Eisenlegierung	iron@en|fer@fr	chemisches Element, silber-graues, hartes Metall. Kommt in der Natur selten als gediegenes Metall vor (außer in Meteoriten), wird häufiger aus Eisenerzen verhüttet. In der Archäologie wird mit dem Begriff "Eisen" meist eine Eisen-Kohlenstoff-Legierung bezeichnet.	BBF566				https://www.wikidata.org/wiki/Q58888853	Q7|Q8	http://vocab.getty.edu/page/aat/300011002|	https://www.wikidata.org/wiki/Q677		
B28FA6		3	Q2	Kupfer	Cu|reines Kupfer	copper@en	chemisches Elemten, rot-bräunliches Metall. Auch als "Halbedelmetall" bezeichnet. Kommt in der Natur in gediegener Form und als Erz vor. Erste Metall, dass von den Menschen gezielt bearbeitet wurde.	BBF566				https://www.wikidata.org/wiki/Q58888853	Q7|Q8	http://vocab.getty.edu/page/aat/300011020			
A82D86		3	Q2	Buntmetalllegierung	Buntmetall	nonferrous metal@en	Sammelbezeichnung für farbige Legierungen mit schweren Nichteisenmetallen als Hauptbestandsteile. Wird in der archäologischen Restaurierung hauptsächlich als allgemeiner Oberbegriff für kupferhaltige Objektwerkstoffe verwendet, solange keine eindeutige Materialanalyse durchgeführt wurde	BBF566					Q7|Q8	https://www.wikidata.org/wiki/Q355809			
FGB415		4	Q2	Kupferlegierung	Kupferlegierungen	copper alloy@en	Legierung mit Kupfer als Hauptbestandteil	A82D86					Q7|Q8	https://www.wikidata.org/wiki/Q518350|http://vocab.getty.edu/page/aat/300010942			
BF7D14		5	Q2	Bronze	Zinnbronze|Bronzen	bronze@en	Kupferlegierung mit Zinn als zweiter Hauptbestandteil. Moderne Bronzen weisen in der Regel genormte Zusammensetzungen und gezielte Legierungsbestandteile auf. In historischen Bronzen finden sich, je nach Zeitstellung und Kultur, unter Umständen sehr unterschiedliche Zusammetzungen und andere Bestandteile, wie Zink, Silber, Blei, Antimon, Arsen, etc. Zur eindeutigen metallurgischen Bestimmung wird der Begriff Bronze häufig zusammen mit dem vorangestellten Hauptlegierungszusatz verwendet (Bleibronze, Arsenbronze, usw.). Bronze kann, je nach Legierungszusammensetzung, eine gelb-golde, rötliche bis weißliche Färbung aufweisen	FGB415				https://cameo.mfa.org/wiki/Bronze	Q7|Q8	http://vocab.getty.edu/page/aat/300010957	https://www.wikidata.org/wiki/Q34095		
A8B271		5	Q2	Messing		brass@en	Kupferlegierung mit Zink als zweiter Hauptbestandteil in unterschiedlichen Massenanteilen. Weitere Legierungsbestandteile können zur Einstellung bestimmter Eigenschaften zugegeben sein. Messing kann, je nach Legierungszusammensetzung, eine hellgelbe, goldene bis bräunliche Färbung aufweisen.	FGB415				https://cameo.mfa.org/wiki/Brass	Q7|Q8	https://www.wikidata.org/wiki/Q39782|http://vocab.getty.edu/page/aat/300010946			
G992B6		4	Q2	Blei		lead@en	Chemisches Element, silber-gräuliches, weiches Metall. Gehört zur Gruppe der Schwermetalle und wirkt giftig auf den menschlichen Körper. Kommt in der Natur seltener in gediegener Form vor. Wurde in der Antike sowohl für eigenständige Objektherstellung, als auch in Pigmenten und Glazuren sowie Legierungen mit anderen Metallen verwendet.	A82D86				https://cameo.mfa.org/wiki/Lead	Q7|Q8	https://www.wikidata.org/wiki/Q708|http://vocab.getty.edu/page/aat/300011022			
G8AG1C		4	Q2	Zink		zinc@en	chemisches Element, weiß-bläuliches Metall, Kommt seltenen in gediegener Form, gebunden in Erzen jedoch recht häufig auf der Erse vor. In der Antike wurde es vor allem als Legierungsbestandteil, erst später auch in reiner Form oder als Beschichtung verarbeitet. In oxidischer Form ist Zink unter anderem auch in Pigmenten enthalten.	A82D86				https://cameo.mfa.org/wiki/Zinc	Q7|Q8	http://vocab.getty.edu/page/aat/300011037| https://www.wikidata.org/wiki/Q758			
G78BD6		4	Q2	Zinn		tin@en	Chemisches Elemtent, silberweißes, sehr weiches Metall. Gehört zur Gruppe der Schwermetalle. Wurde in der Antike hauptsächlich als Legierungsbestandteil von (Zinn-)Bronze, später auch als reines Metall (v.a. für Geschirr und kleinere Kultobjekte), Beschichtungen und Lote verwendet.	A82D86				https://de.wikipedia.org/wiki/Zinn	Q7|Q8	http://vocab.getty.edu/page/aat/300133748| https://www.wikidata.org/wiki/Q1096| https://cameo.mfa.org/wiki/Tin			
CD3341		1	Q2	Organik	organisches Material	organic@en	Allgemeiner Sammelbegriff für natürlich von Organismen gebildete Stoffe meist tierisch- oder pflanzlichen Ursprungs. Werden durch biologische Mechanismen im Boden abgebaut, wodurch archäologische Objekte aus organischen Materialien nur unter besonderen Bedingungen, die deren fortschreitende Zersetzung verlangsamen oder verhindern, erhalten bleiben. 	B51DAF	Q12				Q7|Q8	http://vocab.getty.edu/page/aat/300011792|https://cameo.mfa.org/wiki/Organic	https://www.wikidata.org/wiki/Q1783121		
AB4988		2	Q2	Textil	Stoff	textile@en	Ein in verschiedenen Verfahren aus natürlichen oder synthetischen Fasern hergestelltes, räumliches Gebilde. 	CD3341				https://www.wikidata.org/wiki/Q28823	Q7|Q8	https://cameo.mfa.org/wiki/Textile			
D73F9B		2	Q2	Leder		leather@en	Durch chemische Bearbeitung (Gerbung) haltbar gemachte Tierhaut.  	CD3341				https://www.wikidata.org/wiki/Q286	Q7|Q8	https://cameo.mfa.org/wiki/Leather|http://vocab.getty.edu/page/aat/300011845			
A9A858		2	Q2	Nassholz		wet-wood@en		CD3341					Q7|Q8				
B626A3		2	Q2	Bein	Knochen|Geweih	bone@en		CD3341					Q7|Q8				
GB6DF3		1	Q2	Silikat	silikatische Materialien|mineralische Materialien			B51DAF	Q12				Q7|Q8	http://www.wikidata.org/entity/Q7130787			
A11ACA		2	Q2	Keramik		ceramic@en	anorganischer, nicht-metallischer, durch das Brennen von Ton hergestellter Werkstoff	GB6DF3					Q7|Q8	http://vocab.getty.edu/page/aat/300235507|http://www.wikidata.org/entity/Q45621|https://cameo.mfa.org/wiki/Ceramic			
DA2D73		2	Q2	Glas		glas@en	anorganischer, amorpher Silizium-Feststoff, der durch schnelles Abkühlen einer Schmelze erzeugt wird. Gläser bestehen in der Rege aus Glasbildner (Quarzsand (SIO2)), Flussmittel (z.B. Soda (NA2O) oder Pottasche (K2O)) und Stabilisatoren (z.B. Calciumoxid (CaO) oder Calciumcarbonat (CaCO3))	GB6DF3				https://cameo.mfa.org/wiki/Glass	Q7|Q8	http://vocab.getty.edu/page/aat/300010797	https://www.wikidata.org/wiki/Q11469		
D866AD		2	Q2	Gestein	Mineral|Stein	mineral@en|stone@en	mehr oder weniger verfestigter Werkstoff aus mikroskopisch heterogenen Gemischen von Mineralen, Gesteinsbruchstücken, organischen und/oder anorganischen Ausscheidungen und Wasser (Kristallwasser). Hauptgemengeteile bilden Minerale wie Silikate (Feldspat, Quarz, Glimmer, etc.) und Karbonate (Calcit, Dolomit, etc.).	GB6DF3				https://de.wikipedia.org/wiki/Gestein	Q7|Q8	https://cameo.mfa.org/wiki/Stone|https://www.wikidata.org/wiki/Q8063|https://cameo.mfa.org/wiki/Rock	http://vocab.getty.edu/page/aat/300011176		
C4BCF8		0	Q2	Zustandserfassung	Zustandserhebung		geplante und methodische Untersuchung und Einschätzung des Erhaltungszustandes eines Objektes zu einem definierten Zeitpunkt (vgl. DIN EN 15898:2020-02)	top				http://www.wikidata.org/entity/Q125400047	Q7|Q8				
D3AF3A		1	Q2	Erhaltungszustand	Vorzustand|Einlieferungszustand	condition@en| state of preservation@en	Auf den Ergebnissen der Objektuntersuchung basierende Erfassung und Beurteilung des Zustandes eines Objektes zum Zeitpunkt der Einlieferung in die Restaurierungswerkstatt	C4BCF8					Q7|Q8		http://vocab.getty.edu/page/aat/300389724|http://vocab.getty.edu/page/aat/300435425		
CA1BC5		1	Q3	[Objektuntersuchung]		investigation@en|examination@en	Beschaffung und Sammlung von Informationen über den Zustand eines Objektes, anhand derer das Restaurierungs-/Konservierungskonzept und/oder die weiteren Lagerungs- und Handhabungsempefehlungen formuliert werden	C4BCF8				http://www.wikidata.org/entity/Q125400047	Q7|Q8		http://vocab.getty.edu/page/aat/300137546|http://vocab.getty.edu/page/aat/300226216		
AA6941		2	Q3	[Untersuchungsgerät]	Analysegerät	analytical device@en		CA1BC5					Q7|Q8		http://vocab.getty.edu/page/aat/300122283		
C2788C		3	Q2	RFA-Spektrometer	Röntgenfluoreszenz-Spektrometer	X-ray fluorescence spectrometer@en	Gerät mit dem eine Röntgenfluoreszenzanalyse durchgeführt werden kann. Das Gerät misst dabei die Intensitäten der emmitierten Fluoreszenzsröntgenstrahlung eines Materials/einer Probe, sodass Rückschlüsse auf die Elementzusammensetzung innerhalb der Probe gezogen werden können.	AA6941					Q7|Q8				
DG6841		3	Q2	CT	Computertomograph	computed tomography scanner@en		AA6941					Q7|Q8	https://d-nb.info/gnd/4113240-3			
G8D62A		3	Q2	Röntgenanlage		X-ray equipment@en		AA6941					Q7|Q8				
B538AG		3	Q2	Mikroskop		microscope@en		AA6941				https://de.wikipedia.org/wiki/Mikroskop	Q7|Q8	http://vocab.getty.edu/page/aat/300024594			
FC2113		4	Q2	Lichtmikroskop		light microscope@en		B538AG				https://de.wikipedia.org/wiki/Lichtmikroskop	Q7|Q8				
A75779		5	Q2	Stereomikroskop		stereomicroscop@en		FC2113				https://de.wikipedia.org/wiki/Stereomikroskop	Q7|Q8				
G69G4B		5	Q2	monokular Mikroskop		monocular microscope@en		FC2113					Q7|Q8				
GA6422		5	Q2	binokular Mikroskop		binocular microscope@en		FC2113				https://de.wikipedia.org/wiki/Stereomikroskop	Q7|Q8				
A7FA3B		5	Q2	Polarisationsmikroskop		petrographic microscope@en		FC2113				https://de.wikipedia.org/wiki/Polarisationsmikroskop	Q7|Q8				
A9F854		5	Q2	Fluoreszenzmikroskopen		fluorescence microscope@en		FC2113				https://de.wikipedia.org/wiki/Fluoreszenzmikroskopie	Q7|Q8				
B94DCD		5	Q2	Auflichtmikroskop		incident light microscope@en		FC2113					Q7|Q8				
A9611D		5	Q2	Durchlichtmikroskop		transmitted light microscope@en		FC2113					Q7|Q8				
B764C6		4	Q2	Rasterelektronenmikroskop	REM	scanning electron microscope@en|SEM@en		B538AG				https://de.wikipedia.org/wiki/Rasterelektronenmikroskop	Q7|Q8	http://vocab.getty.edu/page/aat/300024596			
AG4G3C		4	Q2	Digitalmikroskop				B538AG						http://vocab.getty.edu/page/aat/300444116			
G8C987		3	Q2	UV-Lampe				AA6941					Q7|Q8				
D4A13D		2	Q3	[Untersuchungsmethode]				CA1BC5					Q7|Q8				
G9B788		3	Q2	Materialanalyse				D4A13D					Q7|Q8				
FCB7A5		3	Q2	Röntgenfluoresezenzanalyse	RFA	XRF@en|X-ray fluorescence analysis@en									http://vocab.getty.edu/page/aat/300224161		
C2488A		1	Q2	Endzustand	Abschlusszustand		Erfassung und Beurteilung des Zustandes eines Objektes nach Abschluss der praktisch durchgeführten Konservierungs- und Restaurierungsmaßnahmen sowie Überprüfung in wie fern das zuvor festgelegte Restaurierung-/Konservierungsziel erreicht werden konnte.	C4BCF8					Q7|Q8				
A18D95		0	Q2	Restaurierungs-/Konservierungskonzept				top					Q7|Q8				
DA4158		1	Q2	Restaurierungs-/Konservierungsziel									Q7|Q8				
AC1786		1	Q2	Zeitplanung									Q7|Q8				
CDD6B5		1	Q2	Risikobeurteilung		risk assessment@en							Q7|Q8		http://vocab.getty.edu/page/aat/300263660		
GDF23F		1	Q2	Methodik	Vorgehensweise	methodology@en	Planung der strukturierten Vorgehensweise bei der praktischen Durchführung zur Erreichung des festgelegten Restaurierungs-/Konservierungsziel. Basierend auf den Erkenntnissen der Zustandserfassung sowie unter Berücksichtigung der Risikobeurteilung und der Zeitplanung werden die geeignetsten Methoden und Techniken, die benötigten Materialien sowie Werkzeuge festgelegt. 						Q7|Q8		http://vocab.getty.edu/page/aat/300054676		
CFGDA3		0	Q2	Praktische Durchführung	durchgeführte Maßnahme		Ausführung der im Restaurierungskonzept geplanten Vorgehensweisen zur Erreichung des festgelegten Restaurierungs-/Konservierungsziel 						Q7|Q8				
GF41DG		1	Q3	[aktiver Objekteingriff]	Behandlung|Bearbeitung		aktive Einwirkung auf das Objekt entsprechend des überlegten Restaurierungs-/Konservierungskonzeptes	CFGDA3		G98FD4|C79561			Q7|Q8				
G98FD4			Q2	Konservierung	stabilisierende Konservierung	conservation@en	aktiver Eingriff, der direkt an einem Objekt vorgenommen wird, um weiteren Abbau, Zerfall und/oder Schädigung zu verhindern, zu verzögern und/oder zu begrenzen (vgl. DIN EN 15898:2020-02)	ignore		GF41DG		http://www.wikidata.org/entity/Q125400047	Q7|Q8				
C79561			Q2	Restaurierung		restoration@en	aktiver Eingriff an einem stabilen oder stabilisierten Objekt, der darauf abzielen, dessen Verständnis, Wahrnehmung und/oder Wertschätzung, zu verbessern, unter Beachtung dessen ursprünglicher Bedeutung sowie der vorgefundenen oder vermuteten Techniken und Materialien (vgl. DIN EN 15898:2020-02)	ignore		GF41DG		http://www.wikidata.org/entity/Q125400047	Q7|Q8	http://vocab.getty.edu/page/aat/300053742	https://www.wikidata.org/wiki/Q217102		
B5163B		2	Q2	Methode und Technik			Die zur Erreichung des Restaurierungs.- und/oder Konservierungsziel angewendeten Vorgehensweisen während des Objekteingriffs.	GF41DG					Q7|Q8		https://www.wikidata.org/wiki/Q1799072		
CDD613		3	Q2	Reinigung	Reinigen	cleaning@en	Methode zur Entfernung unerwünschter und/oder potenziell schädlicher Materialien von einem Objekt. In der Regel auf Erd-, Dreck- oder Staubanhaftungen bezogen	B5163B		G814D2		http://www.wikidata.org/entity/Q125400047	Q7|Q8	http://vocab.getty.edu/page/aat/300053027			
FF8792		3	Q2	Trockenreinigung		dry cleaning@en							Q7|Q8	http://vocab.getty.edu/page/aat/300219637			
C3733A		3	Q2	Feuchtreinigung		wet cleaning@en							Q7|Q8				
A194CF		3	Q2	Waschung	Nassreinigung|Spülung	washing@en							Q7|Q8		http://vocab.getty.edu/page/aat/300053042		
G814D2		3	Q2	Freilegung	Freilegen	uncovering@en	Methode zur Entfernung unerwünschter und/oder potenziell schädlicher Materialien von der Oberfläche eines Objektes zur Offenlegung der zuvor verdeckten originalen Objektoberfläche. In der Regel auf die Entfernung von Korrosions- oder Sinterauflagerungen bezogen.	B5163B		CDD613			Q7|Q8		http://vocab.getty.edu/page/aat/300053027		
CDD613		3	Q2	Entsalzung	Entsalzen	desalination@en	Methode zur Entfernung von durch die Bodenlagerung in ein Objekt/Material eingedrungenen Salzen	B5163B					Q7|Q8				
DA9CGG		3	Q2	Festigung	Festigen|Sicherung|Stabilisierung		Methode zur Verbesserung des inneren Zusammenhaltes oder der mechanischen Stabiliät eines Objektes durch Zuführung eines stabilisierenden Materials	B5163B				http://www.wikidata.org/entity/Q125400047	Q7|Q8				
A13CD1		3	Q2	Klebung	Kleben|Fügung	bonding@en	Methode des Zusammenfügens von Fragmenten und/oder Materialien durch eine adhäsive Verbindung mit Klebstoff	B5163B					Q7|Q8				
CGC619		3	Q2	Ergänzung	Ergänzen	filling@en	Methode zur Vervollständigung fehlender Objektteile durch das Hinzufügen von Material. Wird nach der modernen archäologischen Restaurierungsethik nur noch aus statischen/stabilisierenden Gründen oder zu Rekonstruktion eines vollkommen unkenntlichen Erscheinungsbildes durchgeführt.	B5163B					Q7|Q8				
BD119A		3	Q2	Retusche	Kolorieren|Färben												
C364G1		2	Q3	[Material]	Restaurierungsmaterial	material@en|product@en		GF41DG					Q7|Q8	http://www.wikidata.org/entity/Q214609			
A7FC45		3	Q3	[Reinigungsmittel]		cleaning product@en@detergent@	Verbrauchsstoffe zur Beseitigung von Verunreinigungen	C364G1				https://www.wikidata.org/wiki/Q1974312	Q7|Q8		http://vocab.getty.edu/page/aat/300014906		
C421BF		3	Q2	Lösungsmittelmittel	Lösemittel	solvent@en		A7FC45					Q7|Q8				
F87124		3	Q2	Komplexbildner				A7FC45					Q7|Q8				
B3FCA1		3	Q2	Reduktionsmittel		reducing agent@en	chemische Substanz, die Elektronen abgeben und somit andere Substanzen reduzieren kann (Redoxreaktion)	A7FC45				https://www.wikidata.org/wiki/Q216830	Q7|Q8	http://vocab.getty.edu/page/aat/300380032			
A2B746		3	Q2	basisches Reinigungsmittel	Base	alkaline solution@en|base@en	chemische Substanz, die in wässriger Lösung ein Proton aufnehmen oder ein freies Elektronenpaar abspalten kann.	A7FC45				https://www.wikidata.org/wiki/Q11193	Q7|Q8	http://vocab.getty.edu/page/aat/300237910|https://cameo.mfa.org/wiki/Alkali			
FGF575		3	Q2	saures Reinigungsmittel	Säure	acidic detergent@en|acid@en	chemische Substanz, die in wässriger Lösung Protonen aus ihrer Wasserstoffverbindung abspalten oder ein freies Elektronenpaar aufnehmen kann	A7FC45				https://www.wikidata.org/wiki/Q11158	Q7|Q8	http://vocab.getty.edu/page/aat/300011752|https://cameo.mfa.org/wiki/Acid			
CB4G84		3	Q3	[Festigungsmittel]				C364G1					Q7|Q8				
BGGCA4		3	Q3	[Klebstoff]	[Klebemittel]			C364G1					Q7|Q8				
D532GF		3	Q3	[Ergänzungsmaterial]				C364G1					Q7|Q8				
C5GA26		3	Q3	[Verstärkungsmittel]				C364G1					Q7|Q8				
F9549F		3	Q3	[Kolorierungsmaterial]				C364G1					Q7|Q8				
FD5149		3	Q3	[Entsalzungsmittel]				C364G1					Q7|Q8				
C93638		2	Q3	[Werkzeug]				GF41DG					Q7|Q8	http://www.wikidata.org/entity/Q39546			
GF9C49		3	Q2	technisches Gerät				C93638					Q7|Q8				
G487C2		3	Q2	Mikrosandstrahlgerät	Feinsandstrahlgerät			GF9C49					Q7|Q8				
D8G747		3	Q2	Mikromotor				GF9C49					Q7|Q8				
ABF57G		4	Q2	Diamantschleifkörper		diamand grinding wheel@en		D8G747					Q7|Q8				
A97F31		4	Q2	Gummischleifkörper	Gummipolierer	rubber abrasives@en|rubber polisher@en		D8G747					Q7|Q8				
CDF423		4	Q2	Metallfräser		metal cutter@en		D8G747					Q7|Q8				
C5A318		3	Q2	Ultraschallgerät				GF9C49					Q7|Q8				
GF9C48		3	Q2	Absauganlage				GF9C49					Q7|Q8				
D941B1		3	Q2	Gefriertrocknungsanlage				GF9C49					Q7|Q8				
DAC482		3	Q2	Lötanlage				GF9C49					Q7|Q8				
D941BB		3	Q2	manuelles Werkzeug				C93638					Q7|Q8				
CC2BBB		3	Q2	Pinsel				D941BB					Q7|Q8				
C4569A		3	Q2	Bürste		brush@en		D941BB					Q7|Q8				
D84847		3	Q2	Wattestäbchen		cotton swab@en		D941BB					Q7|Q8				
D1A63D		3	Q2	Putzholz		cleaning wood stick@en		D941BB					Q7|Q8				
F91CBB		3	Q2	Radiergummi		eraser@en		D941BB					Q7|Q8				
B28GC7		3	Q2	Zellstoff				D941BB					Q7|Q8				
AA4F93		3	Q2	Textil		textile@en		D941BB					Q7|Q8				
A341F9		3	Q2	Schwamm		sponge@en		D941BB					Q7|Q8				
F71C33		3	Q2	Skalpell		scalpel@en		D941BB					Q7|Q8				
D1C67A		3	Q2	Metallschaber		metal scraper@en		D941BB					Q7|Q8				
ACB46G		3	Q2	Stachelschweinborste		porcupine bristle@en		D941BB					Q7|Q8				
F18C56		3	Q2	Holzschaber		wood scraper@en		D941BB					Q7|Q8				
G33846		3	Q2	Acrylglasschaber	Plexiglasschaber	acrylic scraper@en		D941BB					Q7|Q8				
F5G576		1	Q2	präventive Konservierung			vorbeugende Maßnahmen zur Vermeidung oder Minimierung von künftigen Schaden, Abbau, Verlust und folglich invasivem Eingriff. Bei der präventiven Konservierung findet lediglich eine passive Einwirkung auf das Objekt statt (vgl. DIN EN 15898:2020-02).	CFGDA3				http://www.wikidata.org/entity/Q125400047	Q7|Q8				
D6A11G		2	Q2	Lagerung													
AC16G1		3	Q2	Verpackung													
GA3F81		4	Q2	Verpackungsmaterial													
G1A6GF		4	Q2	Verpackungsart													
CD5C3F		2	Q2	Ausstellungsmontage													
C3A182		1	Q2	Nachbildung	Nachbilden|Kopieren		Methode zur Erstellung aussagekräftiger Vergleichsstücke zu wissenschaftlichem Zweck	CFGDA3					Q7|Q8				
BB78D2		3	Q3	[Nachbildungsmaterial]				C364G1					Q7|Q8				
F1F372		2	Q2	Kolorierung	Kolorieren|Färben		Methode zur farbigen Fassung einer angefertigten Kopie nach originalem Objektvorbild	C3A182					Q7|Q8				
G76B7G		0	Q2	Auswertung	Interpretation			top									
G76B7G		0	Q2	Handlungsempfehlung			Durch einen fachlich qualifizierten Restaurator formulierte Hinweise zur Handhabung eines Objektes, um dieses nachhaltig vor negativer Beeinträchtigung zu schützen und zu erhalten	top`;

  const data = {
    "name": "Asia",
    "children": [
        {
            "name": "Vietnam",
            "children": [
                {
                    "name": "Saigon"
                }
            ]
            
        },
        {
            "name": "India",
            "children": [
                {
                    "name": "Mumbai"
                }
            ]
            
        }
    ]
  }

  const table = `identifier,concept,parent
                B51DAF,Ding,top
                A18D95,Mensch,B51DAF
                CD5C3F,Frau,A18D95
                F5G576,Mann,A18D95
                C4BCF8,Kind,A18D95
                B5DD1A,Junge,C4BCF8
                CD3341,Mädchen,C4BCF8
                A11ACA,Essen,B51DAF
                GB6DF3,Gemüse,A11ACA
                C364G1,Obst,A11ACA
                EB6DF3,Konzept1,ignore
                E364G1,Konzept2,ignore
                EB6DF3,,
                E364G1,,
                EB6DF4,Aubergine,
                E364G2,Zuchini,`;
  
  const tsvData = d3.tsvParse(thesaurus)
  //const tsvData = d3.csvParse(table)

  const cleanedArray= cleanTableData(tsvData);
  const cleanedTableData = cleanedArray[0]
  const ignored = cleanedArray[1]

  const toppedArray = topData(cleanedTableData);
  const toppedData = toppedArray[0]
  const topPosition = toppedArray[1]
  const orphans = toppedArray[2]

  const hints = [{variable:ignored, id:"ignored"}, {variable:topPosition, id:"topped"}, {variable:orphans, id:"orphans"}]
  const strings = ["rows were ignored: ", "concepts are on top: ","concepts are orphans: "]

  for (let i = 0; i < hints.length; i++) {
    hintObject = hints[i]
    if (hintObject.variable.length > 0) {
      document.getElementById(hintObject.id).innerHTML = "The following " + strings[i] + "\n" + JSON.stringify(hintObject.variable) + "\n"
    }
  } 

  const identifierConcepts = idToName(toppedData)

  document.getElementById("outputText").innerHTML = "The resulting Concept-Array is: " + "\n" + JSON.stringify(identifierConcepts) + "\n" //toppedData

  try {
    const stratifiedData = stratifyData(toppedData)
    //document.getElementById("outputText").innerHTML = JSON.stringify(stratifiedData);
    createTree(stratifiedData);
  } catch (error) {
      document.getElementById("errorText").innerHTML = error;
  }
}

async function readSheetFromUrl() {
  let target = document.getElementById("httpInput").value;
  let data = await d3.tsv(target)
  return data;
} 

function readSheetFromFile() {
  let file = document.getElementById("fileInput").files[0];
  let data = d3.tsv(file)
  return data;
}

function cleanTableData(data) {
  const cleanArray = []
  const ignored = []
  for (let i = 0; i < data.length; i++) {
    let row = data[i];
    if (row.parent != "ignore") {
      if (row.prefLabel != "") {
        //remove whitespace from row.identifier and row.parent
        row.identifier = row.identifier.replace(/\s/g, "");
        row.parent = row.parent.replace(/\s/g, "");
        row = {"identifier":row.identifier,"concept":row.concept,"parent":row.parent}
        cleanArray.push(row);
      }
    }
    else {
      row = {"identifier":row.identifier,"concept":row.concept,"parent":row.parent}
      ignored.push(row);
    }
  }
  return [cleanArray, ignored];
}

function topData(data) {
  const rootArray = []
  const topPosition = []
  const orphans = []
  let topCount = 0;

  for (let i = 0; i < data.length; i++) {
    let row = data[i];
    if (row.parent == "top") {
      topCount++;
      rootArray.push(row)
      topPosition.push(row)
    }
    else if (row.parent == "") {
      orphans.push(row)
      row.parent = "orphanage"
      rootArray.push(row)
    }
    else {
      rootArray.push(row)
    }
  }
  if (topCount > 0) {
    rootArray.push({"identifier":"top","concept":"Thesaurus","parent":""})
  }

  if (orphans.length > 0) {
    rootArray.push({"identifier":"orphanage","concept":"orphanage","parent":"top"})
  }
  return [rootArray, topPosition, orphans];
}

function idToName(data) {
  const transformationObject = {}
  for (let i = 0; i < data.length; i++) {
    row = data[i];
    transformationObject.row.identifier = row.concept;
  }
  return transformationObject
}

function stratifyData(data) {
  let stratifiedData = d3.stratify()
    .id((d) => d.identifier)
    .parentId((d) => d.parent)
  (data);
  return stratifiedData;
}

function createTree(data) {
  var treeLayout = d3.tree().size([1200, 600]);
  var root = d3.hierarchy(data); //stratifiedData
  treeLayout(root)
  d3.select("svg g.nodes") 
    .selectAll("circle.node")
    .data(root.descendants())
    .join("circle")
    .classed("node", true)
    .attr("cx", function(d) { return d.x; })
    .attr("cy", function(d) { return d.y; })
    .attr("r", 10)

  d3.select("svg g.links") 
    .selectAll("line.link")
    .data(root.links())
    .join("line")
    .classed("link", true)
    .style("stroke", "black")
    .attr('x1', function(d) {return d.source.x;})
    .attr('y1', function(d) {return d.source.y;})
    .attr('x2', function(d) {return d.target.x;})
    .attr('y2', function(d) {return d.target.y;});

  d3.select("svg g.nodes")
    .selectAll("text.label")
    .data(root.descendants())
    .join("text")
    .classed("label", true)
    .attr("x", function(d) { return d.x + 15;})
    .attr("y", function(d) { return d.y + 10;})
    .text(d => {
        return d.data.concept;
    });
}