// import * as AdaptiveCards from "adaptivecards";
const AdaptiveCards = require("adaptivecards");

const renderCard = () => {
   const card = {
      type: "AdaptiveCard",
      version: "1.2",
      body: [
         {
            type: "TextBlock",
            text: "VestaBoard",
            weight: "Bolder",
            size: "Medium",
         },
      ],
      actions: [
         {
            type: "Action.ShowCard",
            title: "Send",
            card: {
               type: "AdaptiveCard",
               body: [
                  {
                     type: "Input.Text",
                     id: "sendInput",
                     isMultiline: true,
                     placeholder: "Enter your message",
                     isRequired: true,
                  },
               ],
               actions: [
                  {
                     type: "Action.Submit",
                     title: "Submit",
                  },
               ],
            },
         },
         {
            type: "Action.ShowCard",
            title: "Update",
            card: {
               type: "AdaptiveCard",
               body: [
                  {
                     type: "Input.Text",
                     id: "updateInput",
                     isMultiline: true,
                     placeholder: "Enter your update",
                     isRequired: true,
                  },
               ],
               actions: [
                  {
                     type: "Action.Submit",
                     title: "Submit",
                  },
               ],
            },
         },
         {
            type: "Action.Submit",
            title: "Delete",
         },
      ],
   };

   // Create an AdaptiveCard instance
   const adaptiveCard = new AdaptiveCards.AdaptiveCard();

   // Set its hostConfig property unless you want to use the default Host Config
   // Host Config defines the style and behavior of a card
   adaptiveCard.hostConfig = new AdaptiveCards.HostConfig({
      fontFamily: "Segoe UI, Helvetica Neue, sans-serif",
      // More host config options
   });

   // Set the adaptive card's event handlers. onExecuteAction is invoked
   // whenever an action is clicked in the card
   adaptiveCard.onExecuteAction = function (action) {
      alert("Ow!");
   };

   // Parse the card payload
   adaptiveCard.parse(card);

   // Render the card to an HTML element:
   const renderedCard = adaptiveCard.render();
   console.log(renderedCard);
   // And finally insert it somewhere in your page:
   document.body.appendChild(renderedCard);
};

module.exports = renderCard();
