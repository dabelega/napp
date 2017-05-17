import React from 'react';
import '../../sass/styles.scss';

const Tech = () => (
  <div className="single_left_coloum_wrapper single_cat_left">
    <h2 className="title">TECH NEWS</h2>
            
    <div className="single_cat_left_content floatleft">
      <h3>
        <a href="http://money.cnn.com/2017/05/14/technology/ransomware-attack-threat-escalating/">
        World&apos;s biggest cyberattack sends countries into 
        &apos;disaster recovery mode&apos;
        </a>
      </h3>
      <p>The biggest cyberattack the world has 
         ever seen is still claiming victims
      </p>
      <p className="single_cat_left_content_meta">by 
        <span> Mark Thompson and Jethro Mullen</span>
      </p>
    </div>

    <div className="single_cat_left_content floatleft">
      <h3>
        <a href="http://money.cnn.com/2017/05/12/technology/apple-corning-investment/index.html">
          Apple to invest $200 million in U.S. glass maker Corning
        </a>
      </h3>
      <p>Glass manufacturer Corning is the first to 
         receive an investment from Apple&apos;s new $1 
         billion U.S. manufacturing fund.
      </p>
      <p className="single_cat_left_content_meta">by 
        <span>Kaya Yurieff</span>
      </p>
    </div>

    <div className="single_cat_left_content floatleft">
      <h3>
        <a href="http://money.cnn.com/2017/05/02/technology/highest-paying-internships-glassdoor/index.html">
          You could make $8,000 a month as a Facebook intern 
        </a>
      </h3>
      <p>Not all college kids spend their summers fetching coffee for free.</p>
      <p className="single_cat_left_content_meta">by 
        <span>by Julia Horowitz </span>
      </p>
    </div>

    <div className="single_cat_left_content floatleft">
      <h3>
        <a href="http://money.cnn.com/2017/04/25/technology/tech-versus-taboos-addiction/index.html">
          Can algorithms help kick addiction?
        </a>
      </h3>
      <p>The word &apos;addict&apos; has a lot of stigma attached to it.</p>
      <p className="single_cat_left_content_meta">by 
        <span>Sara Ashley O&apos;Brien</span>
      </p>
    </div>
  </div>
);

export default Tech;
