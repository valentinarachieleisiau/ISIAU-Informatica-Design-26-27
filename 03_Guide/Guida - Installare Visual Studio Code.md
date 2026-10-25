---
tipo: guida
---
# Installare Visual Studio Code

Visual Studio Code è l'[Editor di codice](../04_Glossario/Editor%20di%20codice.md) che usiamo nel corso: il programma in cui scriviamo e leggiamo il codice. È gratuito e funziona su Mac e su Windows.

In aula potete scaricarlo dal sito oppure copiarlo dalla chiavetta della docente, se la rete è lenta. Il sito ufficiale è uno solo: **https://code.visualstudio.com**. Non scaricatelo da altri siti.

## Mac

1. Andate su https://code.visualstudio.com e cliccate il pulsante di download per **Mac**. Scaricate la versione *Universal*, che funziona su tutti i Mac, sia con processore Intel sia con processore Apple
2. Aprite il file scaricato: è nella cartella **Download** e il suo nome finisce con `.dmg`
3. Si apre una finestra con l'icona di Visual Studio Code. Trascinala nella cartella **Applicazioni**
4. Aprite la cartella **Applicazioni** e fate doppio clic su **Visual Studio Code**
5. Il Mac vi avvisa che l'app è stata scaricata da internet e vi chiede se volete aprirla. Cliccate **Apri**. Succede solo la prima volta
6. Se volete tenerla a portata di mano: con l'app aperta, fate clic destro sulla sua icona nel Dock e scegliete **Opzioni → Mantieni nel Dock**

Alla fine potete espellere il disco di installazione (l'icona di Visual Studio Code sulla scrivania o nella barra laterale del Finder) e cancellare il file `.dmg`.

## Windows

1. Andate su https://code.visualstudio.com e cliccate il pulsante di download per **Windows**. Il sito propone la *User Installer*: è quella giusta, perché non chiede la password di amministratore
2. Aprite il file scaricato: è nella cartella **Download** e il suo nome comincia con `VSCodeUserSetup`
3. Accettate il contratto di licenza e andate avanti lasciando le scelte proposte, fino alla schermata **Seleziona attività aggiuntive** (*Select Additional Tasks*)
4. In questa schermata spuntate anche le due voci che parlano di **"Open with Code"** (*Apri con Code*). Servono ad aprire una cartella in Visual Studio Code con il tasto destro del mouse. Lasciate spuntata la voce **Aggiungi a PATH** (*Add to PATH*)
5. Cliccate **Installa**, poi **Fine**. Visual Studio Code si apre da solo

> [!WARNING]
> **Se il vostro portatile ha un processore ARM**
> Alcuni portatili Windows recenti hanno un processore ARM, per esempio uno Snapdragon. Per controllare: **Impostazioni → Sistema → Informazioni**, alla riga **Tipo di sistema**. Se c'è scritto "processore basato su ARM", nella pagina di download scegliete **User Installer (Arm64)** invece di quella proposta.

## Il primo avvio, uguale per tutti

Visual Studio Code è in inglese. Più sotto trovi i nomi dei menu in inglese, con la traduzione italiana tra parentesi.

### La lingua

Se il vostro computer è in italiano, in basso a destra può comparire un avviso che propone di installare la lingua italiana. Potete accettare oppure ignorarlo: il corso funziona in tutte e due le lingue.

### Spegnere l'intelligenza artificiale

Visual Studio Code contiene un assistente basato sull'intelligenza artificiale. Mentre scrivete, l'assistente propone di completare le righe da solo. Nel precorso il codice si scrive a mano, perché la variabile e il ciclo si capiscono cambiando un numero con le proprie mani. Per questo spegniamo l'assistente. Lo riaccenderemo dopo il precorso, quando parleremo di intelligenza artificiale.

1. Aprite le impostazioni:
   - **Mac:** `Cmd + ,` (il tasto Cmd e la virgola)
   - **Windows:** `Ctrl + ,` (il tasto Ctrl e la virgola)
2. Nella casella di ricerca in alto scrivete `chat.disableAIFeatures`
3. Compare una sola impostazione, **Chat: Disable AI Features**. Spuntate la casella
4. Chiudete la scheda delle impostazioni. La finestra della chat e l'icona dell'assistente scompaiono

Non serve salvare: le impostazioni si salvano da sole.

## Aprire la cartella del corso

In Visual Studio Code si apre la **cartella** del corso, non un file alla volta. Così vedete tutti i vostri file nella colonna di sinistra.

1. Menu **File → Open Folder…** (*Apri cartella…*)
   - Su Mac la voce può chiamarsi **Open…** (*Apri…*): va bene lo stesso
2. Scegliete la cartella del corso e cliccate **Apri** (su Windows: **Seleziona cartella**)
3. Visual Studio Code vi chiede se vi fidate degli autori dei file contenuti nella cartella. Gli autori siete voi: rispondete **Yes, I trust the authors** (*Sì, mi fido degli autori*)
4. La cartella compare nella colonna di sinistra, con la sottocartella `esercizi`

Su Windows, se al passo 4 dell'installazione avete spuntato le voci "Open with Code", potete anche fare clic destro sulla cartella in Esplora file e scegliere **Apri con Code**. Su Windows 11 la voce si trova sotto **Mostra altre opzioni**.

## Salvare

Quando un file ha modifiche non salvate, nella sua scheda in alto compare un **pallino bianco** al posto della crocetta. Salvate con:

- **Mac:** `Cmd + S`
- **Windows:** `Ctrl + S`

Il pallino scompare. Il browser vede solo quello che avete salvato: se ricaricate la pagina e non cambia niente, la prima cosa da controllare è il pallino.

## Se qualcosa non va

- **Mac: non trovate Visual Studio Code nella cartella Applicazioni.** Probabilmente l'avete aperta direttamente dal disco di installazione, senza trascinarla. Chiudetela, rifate il passo 3 e apritela dalla cartella **Applicazioni**
- **Windows: le voci «Apri con Code» non compaiono.** Potete sempre usare **File → Open Folder…** dentro Visual Studio Code. Se volete le voci nel menu, scaricate di nuovo il programma dal sito ufficiale e rifate l'installazione, spuntando le due caselle
- **In alto compare una barra con scritto *Restricted Mode*** (*Modalità con restrizioni*). Avete risposto "no" alla domanda sugli autori. Cliccate **Manage** (*Gestisci*) nella barra e scegliete **Trust** (*Considera attendibile*)
- **L'installazione non parte, o la rete è lenta.** Non fermatevi: seguite il resto della lezione con il vicino o con la vicina e completate l'installazione a casa

Vedi anche: [Software del corso](Software%20del%20corso.md) · [Guida - Mostrare le estensioni dei file](Guida%20-%20Mostrare%20le%20estensioni%20dei%20file.md) · [Editor di codice](../04_Glossario/Editor%20di%20codice.md)
