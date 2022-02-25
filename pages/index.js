import Head from 'next/head'
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import styled from 'styled-components';

const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  padding-left: 80px;
  padding-right: 80px;
  @media(max-width: 530px){
    padding-left: 30px;
    padding-right: 30px;
  }
`
const Navigation = styled.li`
  font-size: 14px;
  line-height: 16px;
  text-transform: uppercase;
  color: #F6F6F6;
`
const AsideMenu = styled.aside`
  position: absolute;
  width: 80px;
  right: 0;
  top: 0;
  height: 100%;
  background-color: #D6D6D6;
  z-index: 2;
  @media(max-width: 530px) {
    display: none;
  }
`
const MainPageTitle = styled.h1`
  font-weight: 500;
  font-size: 84px;
  color: #F6F6F6;
  @media(max-width: 530px){
    font-size: 40px;
    line-height: 48px;
  }
`
const SectionTitle = styled.h2`
  font-size: 47px;
  line-height: 71px;
  width: 32%;
  max-width: 560px;
  margin: 0;
  padding: 0;
  font-weight: 300;
  @media(max-width: 530px){
    font-size: 25px;
    line-height: 40px;
    width: 100%;
  }
`
const SectionSubtitle = styled.p`
  font-size: 25px;
  line-height: 40px;
  min-width: auto;
  width: 68%;
  margin: 0;
  padding: 0 80px 0 0;
  @media(max-width: 530px){
    font-size: 16px;
    line-height: 25px;
    width: 100%;
    padding: 0;
  }
`
const AboutUsText = styled.p`
  font-size: 18px;
  line-height: 32px;
  color: #101010;
  font-weight: 300;
  padding: 0 80px 0 0;
  @media (max-width: 530px){
    font-size: 14px;
    line-height: 25px;
    padding-right: 0;
  }
`

export default function Home() {
  return (
    <div>
      <Head>
        <title>Тестовое задание Only</title>
        <meta name="description" content="Тестовое задание на стажировку в Only" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <div className={styles.headerCompany}>
          <Container>
            <Image src="/logo.svg" alt="Логотип Пензгидромаш" width={189} height={38}/>
            <ul className={styles.headerBreadcrums}>
              <li>Главная</li>
              <li>Компания</li>
            </ul>
            <MainPageTitle>Компания</MainPageTitle>
          </Container>
          <div className={styles.headerSubtitle}>
            <Container>
              <p className={styles.headerSubtitleText}>Основная сфера деятельности «ПензГидромаш» — создание систем для нефтяной, газовой, химической и нефтехимической сфер промышленности.</p>
            </Container>
          </div>
        </div>
        <div className={styles.headerNav}>
          <Container>
            <nav>
              <ul className={styles.headerNavList}>
                <Navigation>Компания</Navigation>
                <Navigation>Продукты и услуги</Navigation>
                <Navigation>Проекты</Navigation>
                <Navigation>Новости</Navigation>
                <Navigation>Контакты</Navigation>
              </ul>
            </nav>
          </Container>
        </div>
      </header>
      <main className={styles.main}>
        <section className={styles.mainAboutUs}>
          <Container>
            <SectionTitle>
              О нас
            </SectionTitle>
            <SectionSubtitle>
              Наша цель — взаимовыгодное сотрудничество на основе долгосрочных контрактов. Мы представлены на рынке с 2006 года и не перестаем развиваться, 
              совершенствовать качество своих услуг, оптимизировать затраты для снижения стоимости продукции.
            </SectionSubtitle>
          </Container>
          <div className={styles.mainAboutUsWrapper}>
            <div className={styles.mainAboutUsImage}>
              <Image src="/Mask.jpg" alt="Изображение в секции о нас" width={880} height={580}/>
            </div>
            <div className={styles.mainAboutUsText}>
              <Container>
                <p className={styles.mainAboutUsWorks}>Выполняем все работы по проектированию систем, закупке необходимых материалов, производству, установке, наладке, гарантийному и внегарантийному 
                  обслуживанию. Уникальный парк оборудования позволяет находить решения для любых производственных задач клиентов.</p>
                <AboutUsText>
                  Также мы берем на себя все сложности, связанные с сертификацией нестандартного оборудования. В этом процессе принимают участие инженеры и юристы с многолетним опытом работы. Клиенты получают все нужные документы для того, чтобы использование оборудования было полностью законным. 
                </AboutUsText>
                <AboutUsText>
                  Выпускаемая нашей компанией продукция разрешена к применению Ростехнадзором. На производстве внедрен жесткий менеджмент качества — по международному стандарту ГОСТ Р ИСО 9001.
                </AboutUsText>
              </Container>
            </div>
          </div>
        </section>
        <section className={styles.mainAboutTransport}>
          <Container>
            <SectionTitle>
              Транспорт
            </SectionTitle>
          </Container>
          <div className={styles.mainTransportNumbers}>
              <span className={styles.mainTransportNumbersFirst}>01</span><span>/</span>
              <span className={styles.mainTransportNumbersSecond}>02</span>
          </div>
          <div className={styles.mainAboutUsWrapper}>
            <div className={styles.mainAboutUsImage}>
              <Image src="/Car.jpg" alt="Изображение в секции о нас" width={880} height={580}/>
            </div>
            <div className={styles.mainTransport}>
              <div className={styles.transportBackground}>
                  <SectionSubtitle>
                    Автотранспорт
                  </SectionSubtitle>
                  <ul className={styles.mainTransportList}>
                    <li className={styles.mainTransportListItem}>Собственная автотранспортная компания</li>
                    <li className={styles.mainTransportListItem}>Перевозка негабаритных и тяжеловесных грузов</li>
                    <li className={styles.mainTransportListItem}>Доставка в любую точку России</li>
                  </ul>
              </div>
              <div className={styles.transportTrain}>
                  <SectionSubtitle>
                  Железнодорожный <br/>транспорт
                  </SectionSubtitle>
                  <AboutUsText>На заводе имеется ж/д ветка, заходящая в производственное здание</AboutUsText>
              </div>
            </div>
          </div>
        </section>
      </main>
      <AsideMenu>
        <div className={styles.asideMenu}>
          <div className={styles.asideMenuButton}>
          </div>
          <div className={styles.asideMenuButtonWrapper}>
            <div>
              <p className={styles.asideMenuButtonText}>Меню</p>
            </div>
            <div>
              <p className={styles.asideMenuButtonText}>Листайте вниз</p>
            </div>
            <div>
              <p className={styles.asideMenuButtonArrow}></p>
            </div>
          </div>
        </div>
      </AsideMenu>
    </div>
  )
};
