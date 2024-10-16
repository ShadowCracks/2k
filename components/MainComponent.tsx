
import React from "react";
import ImageComponent from "./ImageComponent";

const MainComponent: React.FC = () => {
  return (
    <main>
      <section>
        <ImageComponent
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6c0d1194d97cec857fe2dd82e2a71e7bc471d6646976ec1bb59f1cc17a06d65e?placeholderIfAbsent=true&apiKey=a9e86b264a2b427cb02fa9112891bf11"
          alt="Main content image"
        />
      </section>
    </main>
  );
};

export default MainComponent;
