import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonIcon,
  useIonViewWillEnter,
  useIonAlert,
} from "@ionic/react";
import { useParams } from "react-router";
import { Preferences } from "@capacitor/preferences";
import { useState } from "react";
import { createOutline, trashOutline } from "ionicons/icons";
import "./Notes.css";

interface Note {
  id: number;
  text: string;
}

const Notes: React.FC = () => {
  const { subject } = useParams<{ subject: string }>();
  const [notes, setNotes] = useState<Note[]>([]);
  const [newNote, setNewNote] = useState("");
  const [presentAlert] = useIonAlert();

  const storageKey = `notes_${subject}`;

  useIonViewWillEnter(() => {
    const loadNotes = async () => {
      const result = await Preferences.get({ key: storageKey });
      if (result.value) {
        setNotes(JSON.parse(result.value));
      } else {
        setNotes([]);
      }
    };
    loadNotes();
  });

  const saveNotes = async (updatedNotes: Note[]) => {
    setNotes(updatedNotes);
    await Preferences.set({
      key: storageKey,
      value: JSON.stringify(updatedNotes),
    });
  };

  const addNote = async () => {
    if (newNote.trim() === "") return;
    const newNoteObject: Note = {
      id: Date.now(),
      text: newNote,
    };
    const updatedNotes = [...notes, newNoteObject];
    saveNotes(updatedNotes);
    setNewNote("");
  };

  const deleteNote = (noteId: number) => {
    presentAlert({
      header: "Xác nhận xóa",
      message: "Bạn có chắc muốn xóa ghi chú này?",
      buttons: [
        {
          text: "Hủy",
          role: "cancel",
        },
        {
          text: "Xóa",
          role: "destructive",
          handler: () => {
            const updatedNotes = notes.filter((note) => note.id !== noteId);
            saveNotes(updatedNotes);
          },
        },
      ],
    });
  };

  const editNote = (noteToEdit: Note) => {
    presentAlert({
      header: "Sửa ghi chú",
      inputs: [
        {
          name: "noteText",
          type: "textarea",
          value: noteToEdit.text,
          placeholder: "Nhập nội dung ghi chú",
        },
      ],
      buttons: [
        {
          text: "Hủy",
          role: "cancel",
        },
        {
          text: "Lưu",
          handler: (data) => {
            if (data.noteText.trim() === "") return false;
            const updatedNotes = notes.map((note) =>
              note.id === noteToEdit.id
                ? { ...note, text: data.noteText }
                : note
            );
            saveNotes(updatedNotes);
            return true;
          },
        },
      ],
    });
  };

  const getColorForNote = (index: number) => {
    const colors = [
      {
        gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        shadow: "rgba(102, 126, 234, 0.3)",
      },
      {
        gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
        shadow: "rgba(240, 147, 251, 0.3)",
      },
      {
        gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
        shadow: "rgba(79, 172, 254, 0.3)",
      },
      {
        gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
        shadow: "rgba(67, 233, 123, 0.3)",
      },
      {
        gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
        shadow: "rgba(250, 112, 154, 0.3)",
      },
      {
        gradient: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
        shadow: "rgba(48, 207, 208, 0.3)",
      },
      {
        gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
        shadow: "rgba(168, 237, 234, 0.3)",
      },
      {
        gradient: "linear-gradient(135deg, #ff9a56 0%, #ff6a88 100%)",
        shadow: "rgba(255, 154, 86, 0.3)",
      },
    ];
    return colors[index % colors.length];
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" />
          </IonButtons>
          <IonTitle>{subject} Notes</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{subject} Notes</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="add-note-container">
          <IonItem lines="full" className="add-note-item">
            <IonInput
              value={newNote}
              placeholder="Thêm ghi chú mới"
              onIonChange={(e) => setNewNote(e.detail.value!)}
              clearInput
            ></IonInput>
          </IonItem>
          <IonButton
            expand="block"
            onClick={addNote}
            className="add-note-button"
          >
            Thêm
          </IonButton>
        </div>

        <IonList inset={true} className="notes-list">
          {notes.map((note, index) => {
            const noteColor = getColorForNote(index);
            return (
              <div
                key={note.id}
                className="note-card"
                style={{
                  background: noteColor.gradient,
                  boxShadow: `0 8px 24px ${noteColor.shadow}`,
                }}
              >
                <div className="note-content">
                  <IonLabel className="note-text">{note.text}</IonLabel>
                  <div className="note-actions">
                    <IonButton
                      fill="clear"
                      className="action-button edit-button"
                      onClick={() => editNote(note)}
                    >
                      <IonIcon slot="icon-only" icon={createOutline}></IonIcon>
                    </IonButton>
                    <IonButton
                      fill="clear"
                      className="action-button delete-button"
                      onClick={() => deleteNote(note.id)}
                    >
                      <IonIcon slot="icon-only" icon={trashOutline}></IonIcon>
                    </IonButton>
                  </div>
                </div>
              </div>
            );
          })}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Notes;
