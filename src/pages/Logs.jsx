import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import {
  getLogs,
  createLog,
} from "../services/logService";

function Logs() {
  const [logs, setLogs] = useState([]);
  const [action, setAction] =
    useState("");

  const loadLogs = async () => {
    try {
      const res = await getLogs();
      setLogs(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadLogs();
  }, []);

  const handleAddLog = async () => {
    if (!action) return;

    try {
      await createLog(action);
      setAction("");
      loadLogs();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Navbar />

      <div className="container">
        <h1>Logs</h1>

        <div className="card">
          <input
            type="text"
            placeholder="Enter Action"
            value={action}
            onChange={(e) =>
              setAction(e.target.value)
            }
          />

          <button
            onClick={handleAddLog}
          >
            Add Log
          </button>
        </div>

        <div className="card">
          {logs.map((log) => (
            <div key={log._id}>
              <strong>
                {log.action}
              </strong>

              <br />

              {new Date(
                log.timestamp
              ).toLocaleString()}

              <hr />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Logs;