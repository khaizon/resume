import "./Biography.css";
import PanelTitle from "../components/PanelTitle";
import Selectable from "../components/selectable";
import { useState } from "react";

const BIOGRAPHY_TEXT = `Today I’m working on my next book. I hope, it will be released this year. Except writing I also participate in many projects, meet with other writers, share my experience in my blog and organize master classes telling more about writing skills and career. I’m a member
of US Free Writers Assosiation since 2012. From time to time I teach students in the University I
studied at. I constantly work on my books and as for now I have 6 books published. My seventh
book will be called Morning Glory – a story about true love in big city.`;

const ABOUT_ME_TEXT = `I’m a writer, blogger, and a teacher. I’m a member of US Free Writers Assosiation since 2012. From time to time I teach students in the University I studied at. I constantly work on my books and as for now I have 6 books published. My seventh book will be called Morning Glory – a story about true love in big city.`;

const CAREER_TEXT = `Engineer`;

const tabMapper = ["About Me", "Beginning", "Career"];

export default function Biography() {
  const [currentTab, changeTab] = useState(0);
  return (
    <div className="biography">
      <div className="biography-left">
        <div className="number-and-tabs">
          <div
            className="panel-number image-text"
            style={{
              backgroundImage: `url(/profilepic.jpeg)`,
            }}
          >
            01
          </div>
          <div className="tabs">
            <Selectable
              isSelected={currentTab === 0}
              onClick={() => {
                changeTab(0);
              }}
            >
              About Me
            </Selectable>
            <Selectable
              isSelected={currentTab === 1}
              onClick={() => {
                changeTab(1);
              }}
            >
              Beginning
            </Selectable>
            <Selectable
              isSelected={currentTab === 2}
              onClick={() => {
                changeTab(2);
              }}
            >
              Career
            </Selectable>
          </div>
        </div>
      </div>
      <div className="biography-right">
        <PanelTitle alignLeft subtitle={tabMapper[currentTab]} title="My Biography" />
        {currentTab === 0 && <div className="biography-text">{ABOUT_ME_TEXT}</div>}
        {currentTab === 1 && <div className="biography-text">{BIOGRAPHY_TEXT}</div>}
        {currentTab === 2 && <div className="biography-text">{CAREER_TEXT}</div>}
      </div>
    </div>
  );
}
