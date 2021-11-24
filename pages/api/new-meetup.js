import { MongoClient } from "mongodb";
//kod tutaj nie skończy się po stronie klienta, więc można używać danych logowania do połączenia tutaj, bez patrzenia się że ktoś go nam podpatrzy

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://mahujedin:7f4wasz123@cluster0.ebgxm.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: "Meetup inserted!" });
  }
}

export default handler;
