import { Globe } from 'lucide-react';


interface HeadPartProps {
  styles: Record<string, string>;
  i18n: any;
  t: (key: string) => string;
}
export default function HeadPart({styles, i18n, t} : HeadPartProps) {
      const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ua' : 'en');
  };

    return (
        <header className={styles.header}>
        <h1 className={styles.title}>{t('title')}</h1>
        <button onClick={toggleLanguage} className={styles.langBtn}>
          <Globe size={18} />
          <span>{i18n.language}</span>
        </button>
      </header>
    )
}