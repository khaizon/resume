import "./biography.css";
import Divider from "../components/divider";
import Selectable from "../components/selectable";
import { useState } from "preact/hooks";

export default function Biography() {
  const [currentTab, changeTab] = useState(0);

  return (
    <div class="biography">
      <div className="biography-left">
        <div className="number-and-tabs">
          <div className="panel-number image-text">01</div>
          <div className="tabs">
            <Selectable
              isSelected={currentTab === 0}
              onClick={() => {
                changeTab(0);
              }}
            >
              About Me
            </Selectable>
            <div className="tab">About Me</div>
            <div className="tab">Beginning</div>
            <div className="tab">Career</div>
          </div>
        </div>
      </div>
      <div class="biography-right">
        <div className="panel-title-block">
          <div class="panel-subtitle">MY CAREER</div>
          <div class="panel-title">MY BIOGRAPHY</div>
          <Divider alignLeft />
        </div>
        <div className="biography-text">
          Today I’m working on my next book. I hope, it will be released this year. Except writing I
          also participate in many projects, meet with other writers, share my experience in my blog
          and organize master classes telling more about writing skills and career. I’m a member of
          US Free Writers Assosiation since 2012. From time to time I teach students in the
          University I studied at. I constantly work on my books and as for now I have 6 books
          published. My seventh book will be called Morning Glory – a story about true love in big
          city.
        </div>
      </div>
    </div>
  );
}
