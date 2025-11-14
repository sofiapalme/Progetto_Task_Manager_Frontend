export interface Task {
  id: string;
  titolo: string;
  descrizione: string;
  fase: string;
  etichette: string[];
  assegnatari: string[];
  idProgetto: string;
  data_scadenza: Date;
}