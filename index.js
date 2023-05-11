import express from 'express';
import cors from 'cors';
import {projectId, privateKey} from './secret/ids.js';
import axios from 'axios';

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
      const r = axios.put(
          'https://api.chatengine.io/users/',
          {username: username, secret: username, first_name: username},
          {headers: {"private-key": privateKey }}
      )
      return res.status(r.status).json(r.data)
  } catch (e) {
    return res.status(e.response.status).json(e.response.data)
  }
});

app.listen(3001);

