import React from "react";
import { Spinner } from "../spinner";
import { Switch } from "../switch";
import { useUserData } from "../shims";

async function toggleAIHelpHistory() {}

export function ManageAIHelp() {
  const [saving, setSaving] = React.useState<boolean>(false);
  const user = useUserData();

  return (
    <section className="field-group">
      <h2>AI Help</h2>
      <ul>
        <li>
          <section
            id="ai-help--history-enable"
            aria-labelledby="enable-history"
          >
            <h3 id="enable-history">Enable History</h3>
            <div className="setting-row">
              <span>
                <p>
                  By Enabling History you allow us to securely store all your
                  chat conversations for a period of up to six months. Please
                  note that after six months, your chat history will be
                  automatically deleted to maintain your privacy and data
                  security.
                </p>
                <p>
                  Disabling History will conceal your current history and
                  prevent any new items from being saved, without deleting what
                  exists.
                </p>
              </span>
              {saving ? (
                <Spinner extraClasses="loading" />
              ) : (
                <Switch
                  name="ai_help_history_enabled"
                  checked={user?.isHistroryEnabled}
                  toggle={async (e) => {
                    setSaving(true);
                    const { checked } = e.target;
                    const source = `${SETTINGS}: ai_help history toggle -> ${Number(
                      checked,
                    )}`;
                    await toggleAIHelpHistory(checked);
                    if (user?.settings) {
                      user.settings.aiHelpHistory = checked;
                    }
                    user?.mutate?.();
                    setSaving(false);
                  }}
                ></Switch>
              )}
            </div>
          </section>
        </li>
        <li>
          <section aria-labelledby="delete-history">
            <h3 id="delete-history">Delete History</h3>
            <div className="setting-row">
              <span>
                Clicking on Delete History will permanently erase all of your AI
                Help saved history.
              </span>
              <button
                className="button"
                onClick={async () => {
                  const confirmed = window.confirm(
                    "Do you want to permanently delete your AI Help history?",
                  );
                  gleanClick(
                    `${SETTINGS}: ai_help history delete -> ${Number(
                      confirmed,
                    )}`,
                  );
                  if (confirmed) {
                    await fetch("/api/v1/plus/ai/help/history/list", {
                      method: "DELETE",
                    });
                  }
                }}
              >
                Delete History
              </button>
            </div>
          </section>
        </li>
      </ul>
    </section>
  );
}
