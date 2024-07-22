import React from "react";
import EventsCard from "../../Components/EventsCard/EventsCard";
import FAQ from "../../Components/FAQ/FAQ";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import TeamCard from "../../Components/TeamCard/TeamCard";
import styles from "./Landing.module.css";

const Landing = () => {
  return (
    <>
      <div className={styles.main_conatiner}>
        <div className={styles.first_view_container}>
          <Navbar />
          <div className={styles.first_view_texts}>
            {/* Change this to your college name */}
            <div className={styles.first_view_heading}>GTech µLearn KNP</div>
            <p className={styles.first_view_description}>
              A nonprofit network of high school coding clubs and makers around
              the world, for the students, by the students.
            </p>
            <div className={styles.join_button}>
              <a href="http://mulearn.org" target="_blank" rel="noopener noreferrer">
                <button className={styles.join_campus_button}>
                  Join Us <img src="/assets/button.png" alt="" />
                </button>
              </a>
            </div>
          </div>
        </div>
        <div id="events" className={styles.second_view_container}>
          <div className={styles.second_view}>
            <p className={styles.sv_header}>
              Events <div></div>
            </p>
          </div>
          <div className={styles.sv_events_container}>
            <EventsCard
              image="/assets/events/event1/poster.png" //Add the path to the image here
              name="Define Hackathon" // Add the name of the event here
              description="Amet, viverra nec sed in massa nibh. Magna dapibus auctor velit, est,
          mattis urna. Malesuada amet nisi libero, urna tristique aliquam." //Add the description of the event.
              tags={["Hackathon", "Networking"]} //Add the Tags for the event.
              registerlink="#" //Add the link for register to the event.
            />
            <EventsCard
              image="/assets/events/event1/poster.png"
              name="Define Hackathon"
              description="Amet, viverra nec sed in massa nibh. Magna dapibus auctor velit, est,
          mattis urna. Malesuada amet nisi libero, urna tristique aliquam."
              tags={["Hackathon", "Networking"]}
              registerlink="#"
            />
            <EventsCard
              image="/assets/events/event1/poster.png"
              name="Define Hackathon"
              description="Amet, viverra nec sed in massa nibh. Magna dapibus auctor velit, est,
          mattis urna. Malesuada amet nisi libero, urna tristique aliquam."
              tags={["Hackathon", "Networking"]}
              registerlink="#"
            />
          </div>
        </div>
        <div id="team" className={styles.third_view_container}>
          <div className={styles.third_view}>
            <p className={styles.tv_header}>
              Team <div></div>
            </p>
            <div className={styles.team_cards_container}>
              <TeamCard
                image="/assets/team/akash.jpeg" //Add the image link here.
                name="Akash R S" //Add the name of the Team Member.
                linkedin="#" //LinkedIn Profile of Team Member.
                position="Faculty In-Charge" //Add the Position of the Team Member.
              />
              <TeamCard
                image="/assets/team/nijin.jpeg"
                name="NIJIN K VARGHESE"
                linkedin="#"
                position="CAMPUS LEAD"
              />
              <TeamCard
                image="/assets/team/chechi.jpeg"
                name="SREELEKSHMI A"
                linkedin="#"
                position="CAMPUS CO-LEAD"
              />
              <TeamCard
                image="/assets/team/abhi.jpeg"
                name="Abhimanyu RB"
                linkedin="#"
                position="TECH Lead"
              />
              
              <TeamCard
                image="/assets/team/image1.png"
                name="Andrea Janet"
                linkedin="#"
                position="Web Lead"
              />
              <TeamCard
                image="/assets/team/nobi.jpeg"
                name="Nobin Sijo"
                linkedin="#"
                position="Design Lead"
              />
              <TeamCard
                image="/assets/team/adil.jpeg"
                name="Adhil N"
                linkedin="#"
                position="Student Activities Coordinator"
              />
              <TeamCard
                image="/assets/team/jith.jpeg"
                name="Abhijith B"
                linkedin="#"
                position="Student Activities Coordinator"
              />
              <TeamCard
                image="/assets/team/so.jpeg"
                name="Soja Grace"
                linkedin="#"
                position="Student Activities Coordinator"
              />
              <TeamCard
                image="/assets/team/aaro.jpeg"
                name="Prasanth P"
                linkedin="#"
                position="Discord Coordinator"
              />
              <TeamCard
                image="/assets/team/shanks.jpeg"
                name="Sanker S "
                linkedin="#"
                position="Outreach Coordinator"
              />
              <TeamCard
                image="/assets/team/atul.jpeg"
                name="Atul Alexander "
                linkedin="#"
                position="Outreach Coordinator"
              />
              <TeamCard
                image="/assets/team/devan.jpeg"
                name="Devanath DR"
                linkedin="#"
                position="Outreach Coordinator"
              />
            </div>
          </div>
        </div>
        <div className={styles.faq_view_container}>
          <div className={styles.faq_view}>
            <p className={styles.fv_header}>
              Frequently Asked Questions <div></div>
            </p>
            <FAQ />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Landing;
