import React from 'react';
import MainPage from '../../components/MainPage/MainPage';
import About from '../../components/About/About';
import CompanyList from '../../components/CompanyList/CompanyList';
import Team from '../../components/Team/Team';
import Goals from '../../components/Goals/Goals';
import Services from '../../components/Services/Services';
import Stages from '../../components/Stages/Stages';
import Development from '../../components/Development/Development';
import FAQ from '../../components/FAQ/FAQ';
import Questions from '../../components/Questions/Questions';
import Contacts from '../../components/Contacts/Contacts';
import Sphere2 from '../../components/Sphere2/Sphere2';
import Programmer from '../../components/Programmer/Programmer';
import Projects from '../../components/Projects/Projects';

export default function Home() {
  return (
    <div>
      <MainPage />
      <About />
      <CompanyList />
      <Team />
      <Goals />
      <Services />
      <Programmer />
      {/* <Projects /> */}
      <Stages />
      <Development />
      <FAQ />
      <Questions />
      <Contacts />
      {/* <Sphere2/> */}
    </div>
  );
}
