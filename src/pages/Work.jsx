import GetInTouch from "./../components/GetInTouch";
import Footer from "./../components/Footer";
import UpdateWorkData from "./../components/UpdateWorkData.jsx";
import ProjectAdding from "./../components/Works/ProjectAdding.jsx";
const Work = () => {
  return (
    <div className='lg:px-48'>
      <UpdateWorkData />
      <ProjectAdding />
      <GetInTouch />
      <Footer />
    </div>
  );
};

export default Work;
