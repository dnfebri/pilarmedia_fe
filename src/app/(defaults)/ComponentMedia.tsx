import IconMessage from "@/components/icon/icon-message";
import IconThumbUp from "@/components/icon/icon-thumb-up";
import { TMedia } from "@/types/media.type";
import React from "react";

export const ComponentMedia = (props: TMedia) => {
  const { title, content, likeAmount, isLiked, author, audit_trail, tags } =
    props;
  return (
    <div className="mb-5 panel">
      <div className="flex">
        <div className="flex-1">
          <div className="flex items-start justify-between">
            <div>
              <h5 className="text-sm ">{author.name}</h5>
              <h4 className="font-semibold text-lg mb-2 text-primary">
                {title}
              </h4>
            </div>
            <p className="text-xs text-zinc-500">{audit_trail.created_at}</p>
          </div>
          <p className="media-text">{content}</p>
          <div className="flex items-center gap-2 mt-2">
            {tags.split(",").map((item, i) => (
              <span key={i} className="badge bg-white-dark">
                {"#"}
                {item}
              </span>
            ))}
          </div>
          <div className="flex-1 flex items-center gap-4 mt-4">
            <button className="flex items-center gap-2">
              <IconThumbUp
                className={`${isLiked ? "text-primary" : "text-zinc-500/80"}`}
              />
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
