function ConversationCard({ output }: any) {
  return (
    <section>
      <h1>Willkommen auf der Bühne!</h1>
      <p>{output ? <div>{output.answer?.content}</div> : "fail"}</p>
    </section>
  );
}
export default ConversationCard;
