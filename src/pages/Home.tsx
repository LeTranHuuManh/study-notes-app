import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonFab,
  IonFabButton,
  useIonAlert,
  useIonViewWillEnter,
} from "@ionic/react";
import {
  bookOutline,
  addOutline,
  calculatorOutline,
  flashOutline,
  languageOutline,
  codeSlashOutline,
} from "ionicons/icons";
import { useHistory } from "react-router-dom";
import { Preferences } from "@capacitor/preferences";
import { useState } from "react";
import "./Home.css";

interface Subject {
  name: string;
  icon: string;
  color: string;
}

const defaultSubjects: Subject[] = [
  {
    name: "Toán",
    icon: calculatorOutline,
    color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  },
  {
    name: "Lý",
    icon: flashOutline,
    color: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
  },
  {
    name: "Anh",
    icon: languageOutline,
    color: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
  },
  {
    name: "CNTT",
    icon: codeSlashOutline,
    color: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
  },
];

const subjectColors = [
  "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
  "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
  "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
  "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
  "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
  "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
  "linear-gradient(135deg, #ff9a56 0%, #ff6a88 100%)",
];

const Home: React.FC = () => {
  const history = useHistory();
  const [presentAlert] = useIonAlert();
  const [subjects, setSubjects] = useState<Subject[]>(defaultSubjects);

  useIonViewWillEnter(() => {
    const loadSubjects = async () => {
      const result = await Preferences.get({ key: "subjects" });
      if (result.value) {
        setSubjects(JSON.parse(result.value));
      } else {
        setSubjects(defaultSubjects);
        await Preferences.set({
          key: "subjects",
          value: JSON.stringify(defaultSubjects),
        });
      }
    };
    loadSubjects();
  });

  const handleSubjectClick = (subjectName: string) => {
    history.push(`/notes/${subjectName}`);
  };

  const addNewSubject = () => {
    presentAlert({
      header: "Thêm môn học mới",
      inputs: [
        {
          name: "subjectName",
          type: "text",
          placeholder: "Tên môn học (VD: Hóa, Sinh, Văn...)",
        },
      ],
      buttons: [
        {
          text: "Hủy",
          role: "cancel",
        },
        {
          text: "Thêm",
          handler: async (data) => {
            if (data.subjectName.trim() === "") return false;
            const newSubject: Subject = {
              name: data.subjectName,
              icon: bookOutline,
              color: subjectColors[subjects.length % subjectColors.length],
            };
            const updatedSubjects = [...subjects, newSubject];
            setSubjects(updatedSubjects);
            await Preferences.set({
              key: "subjects",
              value: JSON.stringify(updatedSubjects),
            });
            return true;
          },
        },
      ],
    });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Môn học</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Môn học</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="subjects-grid">
          {subjects.map((subject, index) => (
            <div
              key={index}
              className="subject-card"
              onClick={() => handleSubjectClick(subject.name)}
              style={{ background: subject.color }}
            >
              <IonIcon icon={subject.icon} className="subject-icon" />
              <div className="subject-name">{subject.name}</div>
            </div>
          ))}
        </div>

        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton onClick={addNewSubject} color="primary">
            <IonIcon icon={addOutline}></IonIcon>
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Home;
