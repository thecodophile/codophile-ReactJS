import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className="border border-black p-2 m-2">
      <h2 className="text-xl font-bold">{title}</h2>
      {isVisible ? (
        <button
          onClick={() => setIsVisible(false)}
          className="border border-green-400 bg-green-200 cursor-pointer text-sm m-2"
        >
          Hide
        </button>
      ) : (
        <button
          onClick={() => setIsVisible(true)}
          className="border border-green-400 bg-green-200 cursor-pointer text-sm m-2"
        >
          Show
        </button>
      )}

      {isVisible && <p>{description}</p>}
    </div>
  );
};

const Instamart = () => {
  const [sectionConfig, setSectionConfig] = useState({
    showAbout: false,
    showTeam: false,
    showCareers: false,
    showProduct: false,
    showDetails: false,
  });
  return (
    <div>
      <h1 className="text-3xl p-2 m-2">Instamart</h1>
      <Section
        title={"About Instamart"}
        description={
          "This is the about section of instamart.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorumby Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
        }
        isVisible={sectionConfig.showAbout}
        setIsVisible={() =>
          setSectionConfig({
            showAbout: true,
            showTeam: false,
            showCareers: false,
            showProduct: false,
            showDetails: false,
          })
        }
      />
      <Section
        title={"Team Instamart"}
        description={
          "This is the team section of instamart.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
        }
        isVisible={sectionConfig.showTeam}
        setIsVisible={() =>
          setSectionConfig({
            showAbout: false,
            showTeam: true,
            showCareers: false,
            showProduct: false,
            showDetails: false,
          })
        }
      />
      <Section
        title={"Careers"}
        description={
          "This is the team section of instamart.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
        }
        isVisible={sectionConfig.showCareers}
        setIsVisible={() =>
          setSectionConfig({
            showAbout: false,
            showTeam: false,
            showCareers: true,
            showProduct: false,
            showDetails: false,
          })
        }
      />
      <Section
        title={"Product"}
        description={
          "This is the product section of instamart.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
        }
        isVisible={sectionConfig.showProduct}
        setIsVisible={() =>
          setSectionConfig({
            showAbout: false,
            showTeam: false,
            showCareers: false,
            showProduct: true,
            showDetails: false,
          })
        }
      />
      <Section
        title={"Details"}
        description={
          "This is the Details section of instamart.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
        }
        isVisible={sectionConfig.showDetails}
        setIsVisible={() =>
          setSectionConfig({
            showAbout: false,
            showTeam: false,
            showCareers: false,
            showProduct: false,
            showDetails: true,
          })
        }
      />
    </div>
  );
};
export default Instamart;
