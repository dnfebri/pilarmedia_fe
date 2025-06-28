import IconMessage from "@/components/icon/icon-message";
import IconThumbUp from "@/components/icon/icon-thumb-up";
import { TMedia } from "@/types/media.type";
import React from "react";

export const ComponentMedia = (props: TMedia) => {
  const { title, content, likeAmount } = props;
  return (
    <div className="mb-5 panel">
      <div className="flex">
        <div className="flex-1">
          <h4 className="font-semibold text-lg mb-2 text-primary">{title}</h4>
          <p className="media-text">
            {content} Fusce condimentum cursus mauris et ornare. Mauris
            fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget
            dapibus. Sed dapibus nulla elementum, rutrum neque eu, gravida
            neque.
          </p>
          <div className="flex-1 flex items-center gap-4 mt-4">
            <button className="flex items-center gap-2">
              <IconThumbUp className="text-primary" />
              <span>{likeAmount}</span>
            </button>
            <button className="flex items-center gap-2">
              <IconMessage />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
