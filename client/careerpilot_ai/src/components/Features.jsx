import FeatureCard from "./FeatureCard";

function Features() {
  return (

<section className="features">

<h2>Features</h2>

<div className="card-container">

<FeatureCard

title="Resume Analyzer"

description="AI checks resume."

/>

<FeatureCard

title="Career Roadmap"

description="Personal roadmap."

/>

<FeatureCard

title="Interview Prep"

description="Practice interviews."

/>

<FeatureCard

title="AI Chat"

description="Ask career questions."

/>

</div>

</section>

  );
}

export default Features;