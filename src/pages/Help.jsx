import React from "react";

const Help = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold text-center my-8">
        How to help page
      </h2>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title text-xl font-medium">
          Contact with us by social media
        </div>
        <div className="collapse-content">
          <p>
            There is our Facebook page link and All the social media platform
            link bottom of the website. there you can join with us and provide
            your support and donation. It could be very useful and helpful for
            all of us and all the affected people.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          Send Your Money To Our Foundation.
        </div>
        <div className="collapse-content">
          <p>
            You can help people financially as well. If you are out side of
            country then, you can send your money by our online payment method.
            And we will provide the money to all the winter affected man.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          Help Us by your talent and physical support
        </div>
        <div className="collapse-content">
          <p>
            If cannot do anything for those people then, at least help them by
            your knowledge and your social activity support like share our
            donation campaign in the social platform.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Help;
