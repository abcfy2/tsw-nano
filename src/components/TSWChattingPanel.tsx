import { useEffect } from "react";
import { iconArray } from "~/content";
import commontyles from "../css/common.module.css";
import panelStyles from "../css/panel.module.css";
import { ActionIcon } from "./ActionIcon";
import { ChatUI } from "./ChatUI";
import { Toaster } from "./ui/toaster";

export interface ChattingPanelProps {
  pageText: string;
  pageURL: string;
  onRender: () => void;
}

export function TSWChattingPanel({
  pageText,
  pageURL,
  onRender,
}: Readonly<ChattingPanelProps>) {
  useEffect(() => {
    if (onRender) {
      onRender();
    }
  }, [onRender]);

  return (
    <div className={panelStyles.tswPanel}>
      <div className={panelStyles.tswPanelHeader} id="tsw-panel-header">
        <div className={panelStyles.tswPanelHeaderLogo}>
          <ActionIcon name="Logo" />
          <span>Chatting With Page</span>
        </div>
        <div className={panelStyles.tswPanelMenu}>
          <div className={panelStyles.tswPanelHeaderAction}>
            {iconArray.map((icon) => (
              <button
                type="button"
                className={commontyles.tswActionBtn}
                id={`tsw-${icon.name.toLowerCase()}-btn`}
                key={icon.name}
              >
                <ActionIcon name={icon.name} />
              </button>
            ))}
          </div>
          <div className={panelStyles.tswPanelHeaderSeparator} />
          <button id="tsw-close-panel" type="button">
            <ActionIcon name="Close" />
          </button>
        </div>
      </div>
      <div className={panelStyles.tswPanelContent}>
        <div id="tsw-output-body">
          <ChatUI pageText={pageText} pageURL={pageURL} />
        </div>
      </div>

      <Toaster />
    </div>
  );
}
