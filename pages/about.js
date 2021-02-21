import Layout from "../components/layout";

const About = () => {
  return (
    <Layout>
      <div className="container">
        <h2>About Me 👸</h2>
      </div>
      <div>
        <figure class="text-end">
          <blockquote class="blockquote">
            <p>只要投入得足够多，就有足够多的快乐，我从未放弃寻找</p>
          </blockquote>
          <figcaption class="blockquote-footer">
             <cite title="Source Title">税税</cite>
          </figcaption>
        </figure>
      </div>
    </Layout>
  );
};

export default About;
