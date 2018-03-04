import { Injectable } from '@angular/core';

import { Item } from '../../models/item';

@Injectable()
export class Items {
  items: Item[] = [];

  defaultItem: any = {
    "name": "John G. Roberts, Jr.",
    "profilePic": "assets/img/justices/john_roberts.jpg",
    "about": "Chief Justice since 2005. (R)",
    "year": "2005"
  };


  constructor() {
    let items = [
      {
        "name": "John G. Roberts, Jr.",
        "year": "2005",
        "profilePic": "assets/img/justices/john_roberts.jpg",
        "about": "(R) Chief Justice: 2005, President Bush. Justice Roberts, Jr. was born in Buffalo, New York, January 27, 1955. He married Jane Marie Sullivan in 1996 and they have two children - Josephine and Jack. He received an A.B. from Harvard College in 1976 and a J.D. from Harvard Law School in 1979. He served as a law clerk for Judge Henry J. Friendly of the United States Court of Appeals for the Second Circuit from 1979–1980 and as a law clerk for then-Associate Justice William H. Rehnquist of the Supreme Court of the United States during the 1980 Term. He was Special Assistant to the Attorney General, U.S. Department of Justice from 1981–1982, Associate Counsel to President Ronald Reagan, White House Counsel’s Office from 1982–1986, and Principal Deputy Solicitor General, U.S. Department of Justice from 1989–1993. From 1986–1989 and 1993–2003, he practiced law in Washington, D.C. He was appointed to the United States Court of Appeals for the District of Columbia Circuit in 2003. President George W. Bush nominated him as Chief Justice of the United States, and he took his seat September 29, 2005."
      },
      {
        "name": "Anthony M. Kennedy",
        "profilePic": "assets/img/justices/anthony_kennedy.jpg",
        "about": "(R) Associate: 1988, President Reagan. Justice Kennedy was born in Sacramento, California, July 23, 1936. He married Mary Davis and has three children. He received his B.A. from Stanford University and the London School of Economics, and his LL.B. from Harvard Law School. He was in private practice in San Francisco, California from 1961–1963, as well as in Sacramento, California from 1963–1975. From 1965 to 1988, he was a Professor of Constitutional Law at the McGeorge School of Law, University of the Pacific. He has served in numerous positions during his career, including a member of the California Army National Guard in 1961, the board of the Federal Judicial Center from 1987–1988, and two committees of the Judicial Conference of the United States: the Advisory Panel on Financial Disclosure Reports and Judicial Activities, subsequently renamed the Advisory Committee on Codes of Conduct, from 1979–1987, and the Committee on Pacific Territories from 1979–1990, which he chaired from 1982–1990. He was appointed to the United States Court of Appeals for the Ninth Circuit in 1975. President Reagan nominated him as an Associate Justice of the Supreme Court, and he took his seat February 18, 1988."
      },
      {
        "name": "Clarence Thomas",
        "profilePic": "assets/img/justices/clarence_thomas.jpg",
        "about": "(R) Associate: 1991, President Bush. Justice Thomas was born in the Pinpoint community near Savannah, Georgia on June 23, 1948. He attended Conception Seminary from 1967-1968 and received an A.B., cum laude, from Holy Cross College in 1971 and a J.D. from Yale Law School in 1974. He was admitted to law practice in Missouri in 1974, and served as an Assistant Attorney General of Missouri, 1974-1977; an attorney with the Monsanto Company, 1977-1979; and Legislative Assistant to Senator John Danforth, 1979-1981. From 1981-1982 he served as Assistant Secretary for Civil Rights, U.S. Department of Education, and as Chairman of the U.S. Equal Employment Opportunity Commission, 1982-1990. From 1990-1991, he served as a Judge on the United States Court of Appeals for the District of Columbia Circuit. President Bush nominated him as an Associate Justice of the Supreme Court and he took his seat October 23, 1991. He married Virginia Lamp on May 30, 1987 and has one child, Jamal Adeen by a previous marriage."
      },
      {
        "name": "Ruth Bader Ginsburg",
        "profilePic": "assets/img/justices/ruth_bader_ginsburg.jpg",
        "about": "(D) Associate: 1993, President Clinton. Justice Ginsburg was born in Brooklyn, New York, March 15, 1933. She married Martin D. Ginsburg in 1954, and has a daughter, Jane, and a son, James. She received her B.A. from Cornell University, attended Harvard Law School, and received her LL.B. from Columbia Law School. She served as a law clerk to the Honorable Edmund L. Palmieri, Judge of the United States District Court for the Southern District of New York, from 1959–1961. From 1961–1963, she was a research associate and then associate director of the Columbia Law School Project on International Procedure. She was a Professor of Law at Rutgers University School of Law from 1963–1972, and Columbia Law School from 1972–1980, and a fellow at the Center for Advanced Study in the Behavioral Sciences in Stanford, California from 1977–1978. In 1971, she was instrumental in launching the Women’s Rights Project of the American Civil Liberties Union, and served as the ACLU’s General Counsel from 1973–1980, and on the National Board of Directors from 1974–1980. She was appointed a Judge of the United States Court of Appeals for the District of Columbia Circuit in 1980. President Clinton nominated her as an Associate Justice of the Supreme Court, and she took her seat August 10, 1993."
      },
      {
        "name": "Stephen G. Bryer",
        "profilePic": "assets/img/justices/stephen_bryer.jpg",
        "about": "(D) Associate: 1994, President Clinton. Justice Breyer was born in San Francisco, California, August 15, 1938. He married Joanna Hare in 1967, and has three children - Chloe, Nell, and Michael. He received an A.B. from Stanford University, a B.A. from Magdalen College, Oxford, and an LL.B. from Harvard Law School. He served as a law clerk to Justice Arthur Goldberg of the Supreme Court of the United States during the 1964 Term, as a Special Assistant to the Assistant U.S. Attorney General for Antitrust, 1965–1967, as an Assistant Special Prosecutor of the Watergate Special Prosecution Force, 1973, as Special Counsel of the U.S. Senate Judiciary Committee, 1974–1975, and as Chief Counsel of the committee, 1979–1980. He was an Assistant Professor, Professor of Law, and Lecturer at Harvard Law School, 1967–1994, a Professor at the Harvard University Kennedy School of Government, 1977–1980, and a Visiting Professor at the College of Law, Sydney, Australia and at the University of Rome. From 1980–1990, he served as a Judge of the United States Court of Appeals for the First Circuit, and as its Chief Judge, 1990–1994. He also served as a member of the Judicial Conference of the United States, 1990–1994, and of the United States Sentencing Commission, 1985–1989. President Clinton nominated him as an Associate Justice of the Supreme Court, and he took his seat August 3, 1994."
      },
      {
        "name": "Samuel Anthony Alito, Jr.",
        "profilePic": "assets/img/justices/samuel_alito.jpg",
        "about": "(R) Associate: 2006, President Bush. Justice Alito, Jr. was born in Trenton, New Jersey, April 1, 1950. He married Martha-Ann Bomgardner in 1985, and has two children - Philip and Laura. He served as a law clerk for Leonard I. Garth of the United States Court of Appeals for the Third Circuit from 1976–1977. He was Assistant U.S. Attorney, District of New Jersey, 1977–1981, Assistant to the Solicitor General, U.S. Department of Justice, 1981–1985, Deputy Assistant Attorney General, U.S. Department of Justice, 1985–1987, and U.S. Attorney, District of New Jersey, 1987–1990. He was appointed to the United States Court of Appeals for the Third Circuit in 1990. President George W. Bush nominated him as an Associate Justice of the Supreme Court, and he took his seat January 31, 2006."
      },
      {
        "name": "Sonia Sotomayor",
        "profilePic": "assets/img/justices/sonia_sotomayor.jpg",
        "about": "(D) Associate: 2009, Obama. Justice Sotomayor was born in the Bronx in NY, New York, on June 25, 1954. She earned a B.A. in 1976 from Princeton University, graduating summa cum laude and receiving the university's highest academic honor. In 1979, she earned a J.D. from Yale Law School where she served as an editor of the Yale Law Journal. She served as Assistant District Attorney in the New York County District Attorney\'s Office from 1979–1984. She then litigated international commercial matters in New York City at Pavia & Harcourt, where she served as an associate and then partner from 1984–1992. In 1991, President George H.W. Bush nominated her to the U.S. District Court, Southern District of New York, and she served in that role from 1992–1998. She served as a judge on the United States Court of Appeals for the Second Circuit from 1998–2009. President Barack Obama nominated her as an Associate Justice of the Supreme Court on May 26, 2009, and she assumed this role August 8, 2009."
      },
      {
        "name": "Elena Kagan",
        "profilePic": "assets/img/justices/elena_kagan.jpg",
        "about": "(D) Associate: 2010, President Obama. Elena Kagan was born April 28, 1960 in New York, NY. She is an Associate Justice of theSupreme Court of the United States. Kagan is the Court's 112th justice and fourth female justice. After attending Princeton, Oxford, and Harvard Law School, she completed federal Court of Appeals and Supreme Court clerkships. She began her career as a professor at the University of Chicago Law School, leaving to serve as Associate White House Counsel, and later as policy adviser, under President Clinton. President Barack Obama appointed her Solicitor General on January 26, 2009. On May 10, 2010, Obama nominated her to the Supreme Court to fill the vacancy from the impending retirement of Justice John Paul Stevens. After Senate confirmation, Kagan was sworn in on August 7, 2010, by Chief Justice John G. Roberts. Kagan\'s formal investiture ceremony before a special sitting of the United States Supreme Court took place on October 1, 2010."
      },
      {
        "name": "Neil M. Gorsuch",
        "profilePic": "assets/img/justices/neil_gorsuch.jpg",
        "about": "(R) Associate: 2017, President Trump. Neil McGill Gorsuch (born August 29, 1967) is an Associate Justice of the Supreme Court of the United States. He was appointed by President Donald Trump to succeed Antonin Scalia following a year-long vacancy and took the oath of office on April 10, 2017. Gorsuch is a proponent of textualism in statutory interpretation and originalism in interpreting the U.S. Constitution. He is the first Supreme Court Justice to serve alongside another Justice for whom he once had clerked (Anthony Kennedy). Gorsuch clerked for Judge David B. Sentelle on the U.S. Court of Appeals for the D.C. Circuit from 1991 to 1992, and then for U.S. Supreme Court Justices Byron White and Anthony Kennedy, from 1993 to 1994. From 1995 to 2005, Gorsuch was in private practice with the law firm of Kellogg, Huber, Hansen, Todd, Evans & Figel. Gorsuch was a Deputy Associate Attorney General at the U.S. Department of Justice from 2005 to his appointment to the Tenth Circuit. Gorsuch was nominated to the United States Court of Appeals for the Tenth Circuit by President George W. Bush on May 10, 2006, to replace Judge David M. Ebel, who took senior status in 2006. He holds a Bachelor of Arts from Columbia University, Juris Doctor from Harvard University, and Doctor of Philosophy in Law from the University of Oxford, where he did postgraduate work at University College, Oxford under the supervision of John Finnis."
      },
      {
        "name": "John Paul Stevens (Retired)",
        "profilePic": "assets/img/justices/john_paul_stevens.jpg",
        "about": "(R) John Paul Stevens (born April 20, 1920) is an American lawyer and jurist who served as an associate justice of the U.S. Supreme Court from 1975 until his retirement in 2010. At the time of his retirement, he was the second oldest serving justice in the history of the Court, and the third longest serving Supreme Court Justice in history. Stevens is widely considered to have been on the liberal side of the Court at the time of his retirement. Born in Chicago, Illinois, Stevens served in the United States Navy during World War II and graduated from Northwestern University School of Law. After clerking for Justice Wiley Blount Rutledge, he co-founded a law firm in Chicago, focusing on antitrust law. In 1970, President Richard Nixon appointed Stevens to the Court of Appeals for the Seventh Circuit. Five years later, President Gerald Ford successfully nominated Stevens to the Supreme Court to fill the vacancy caused by the retirement of Justice William O. Douglas. He became the senior Associate Justice after the retirement of Harry Blackmun in 1994. Stevens retired during the administration of President Barack Obama, and was succeeded by Justice Elena Kagan."
      },
      {
        "name": "Sandra Day O'Connor (Retired)",
        "profilePic": "assets/img/justices/sandra_day_oconnor.jpg",
        "about": "(R) Sandra Day O'Connor (born March 26, 1930) is a retired Associate Justice of the Supreme Court of the United States, serving from her appointment in 1981 by Ronald Reagan to 2006. She was the first woman to serve on the Court. Prior to O'Connor's tenure on the Court, she was an elected official and judge in Arizona serving as the first female Majority Leader of a state senate as the Republican leader in the Arizona Senate. Upon her nomination to the Court, O'Connor was confirmed unanimously by the Senate. On July 1, 2005, she announced her intention to retire effective upon the confirmation of a successor. Samuel Alito was nominated to take her seat in October 2005, and joined the Court on January 31, 2006. Considered a federalist and a moderate Republican, O'Connor tended to approach each case narrowly without arguing for sweeping precedents. She most frequently sided with the Court's conservative bloc, although in the latter years of her tenure, she was regarded as having the swing opinion in many cases. She often wrote concurring opinions that limited the reach of the majority holding. Her majority opinions in landmark cases include Grutter v. Bollinger and Hamdi v. Rumsfeld. She also wrote in part the per curiam majority opinions in Planned Parenthood v. Casey and Bush v. Gore."
      },
      {
        "name": "David H. Souter (Retired)",
        "profilePic": "assets/img/justices/david_souter.jpg",
        "about": "(D) David Hackett Souter, born September 17, 1939, is a retired Associate Justice of the Supreme Court of the United States. He served from October 1990 until his retirement in June 2009. Appointed by President George H. W. Bush to fill the seat vacated by William J. Brennan, Jr., Souter sat on both the Rehnquist and Roberts courts and came to vote reliably with the court's liberal members. He was the only Justice during his time on the Court with extensive prior court experience outside of a federal appeals court. He served as a prosecutor (1966–1968), in the New Hampshire Attorney General's office (1968–1976), as the Attorney General of New Hampshire (1976–1978), as an Associate Justice of the Superior Court of New Hampshire (1978–1983), as an Associate Justice of the New Hampshire Supreme Court (1983–1990) and briefly as a Judge of the United States Court of Appeals for the First Circuit (1990). Following Souter's retirement announcement in May 2009, President Barack Obama nominated Sonia Sotomayor as his successor."
      }
    ];

    for (let item of items) {
      this.items.push(new Item(item));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Item) {
    this.items.push(item);
  }

  delete(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
