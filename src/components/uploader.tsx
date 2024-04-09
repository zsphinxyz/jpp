'use client'

import * as LR from '@uploadcare/blocks';
import UploadcareImage from '@uploadcare/nextjs-loader';

LR.registerBlocks(LR);

function Uploader() {
  return (
    <div>
        <lr-config
            ctx-name="my-uploader"
            pubkey={process.env.NEXT_PUBLIC_UPLOADCARE_PUBLIC_KEY}
            maxLocalFileSizeBytes={2000000}
            multiple={false}
            imgOnly={true}
            sourceList="local, url, camera, dropbox, gdrive, gphotos"
        ></lr-config>


        <lr-file-uploader-regular
            css-src="https://cdn.jsdelivr.net/npm/@uploadcare/blocks@0.35.2/web/lr-file-uploader-regular.min.css"
            ctx-name="my-uploader"
            class="my-config"
        >
        </lr-file-uploader-regular>

        <UploadcareImage
            alt="Test image"
            src="https://ucarecdn.com/68e6e91a-47e9-47cb-adc0-0946bcc48540/"
            className='my-2'
            width="100"
            height="100"
        />

    </div>
  );
}

export default Uploader;