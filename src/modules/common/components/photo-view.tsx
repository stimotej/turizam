"use client";

import {
  PhotoProvider as DefaultPhotoProvider,
  PhotoView as DefaultPhotoView,
} from "react-photo-view";
import RotateCwIcon from "../icons/rotate-cw";
import ZoomInIcon from "../icons/zoom-in";
import ZoomOutIcon from "../icons/zoom-out";

function PhotoProvider(
  props: React.ComponentProps<typeof DefaultPhotoProvider>
) {
  return (
    <DefaultPhotoProvider
      toolbarRender={({ rotate, onRotate, scale, onScale }) => {
        return (
          <>
            <button
              onClick={() => onScale(scale + 1)}
              className="cursor-pointer text-white/70 transition-colors hover:text-white mr-3.5"
              title="Povećaj sliku"
              aria-label="Povećaj sliku"
            >
              <ZoomInIcon className="size-5" />
            </button>
            <button
              onClick={() => onScale(scale - 1)}
              className="cursor-pointer text-white/70 transition-colors hover:text-white mr-3.5"
              title="Smanji sliku"
              aria-label="Smanji sliku"
            >
              <ZoomOutIcon className="size-5" />
            </button>
            <button
              onClick={() => onRotate(rotate + 90)}
              className="cursor-pointer text-white/70 transition-colors hover:text-white"
              title="Rotiraj sliku"
              aria-label="Rotiraj sliku"
            >
              <RotateCwIcon className="size-5" />
            </button>
          </>
        );
      }}
      {...props}
    />
  );
}

// The library's PhotoView calls cloneElement on its child. Children sent from a
// server page can arrive as lazy references rather than elements, and cloning
// one yields "Element type is invalid ... got: undefined" during prerender. So
// the cloned element is a div created here, carrying the caller's className.
function PhotoView({
  className,
  children,
  ...props
}: Omit<React.ComponentProps<typeof DefaultPhotoView>, "children"> & {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <DefaultPhotoView {...props}>
      <div className={className}>{children}</div>
    </DefaultPhotoView>
  );
}

export { PhotoProvider, PhotoView };
