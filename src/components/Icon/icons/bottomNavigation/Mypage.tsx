import React from "react";

const BMypage = ({ selected }: { selected: boolean }) => {
    return selected ? (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M12 12C15.3137 12 18 9.31371 18 6C18 2.68629 15.3137 0 12 0C8.68629 0 6 2.68629 6 6C6 9.31371 8.68629 12 12 12Z"
                fill="white"
            />
            <path
                d="M12 13.999C7.03172 14.0046 3.00553 18.0307 3 22.999C3 23.5513 3.4477 23.999 3.99998 23.999H20C20.5522 23.999 21 23.5513 21 22.999C20.9945 18.0307 16.9683 14.0045 12 13.999Z"
                fill="white"
            />
        </svg>
    ) : (
        <svg
            width="25"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clipPath="url(#clip0_1060_9665)">
                <path
                    d="M11.4527 14.0188C7.19099 14.404 3.94415 18.0051 4.00073 22.2838V22.5008C4.00073 23.3292 4.67231 24.0008 5.50073 24.0008C6.32915 24.0008 7.00073 23.3292 7.00073 22.5008V22.2238C6.95563 19.5967 8.89438 17.3564 11.5007 17.0238C14.252 16.751 16.7035 18.7602 16.9763 21.5114C16.9924 21.6741 17.0006 21.8374 17.0007 22.0008V22.5008C17.0007 23.3292 17.6723 24.0008 18.5007 24.0008C19.3291 24.0008 20.0007 23.3292 20.0007 22.5008V22.0008C19.9958 17.5775 16.4061 13.9957 11.9829 14.0006C11.806 14.0008 11.6292 14.0069 11.4527 14.0188Z"
                    fill="white"
                />
                <path
                    d="M12.001 12C15.3147 12 18.001 9.31369 18.001 6C18.001 2.68631 15.3147 0 12.001 0C8.68729 0 6.00098 2.68631 6.00098 6C6.00426 9.31233 8.68865 11.9967 12.001 12ZM12.001 3C13.6578 3 15.001 4.34316 15.001 6C15.001 7.65684 13.6578 9 12.001 9C10.3441 9 9.00098 7.65684 9.00098 6C9.00098 4.34316 10.3441 3 12.001 3Z"
                    fill="white"
                />
            </g>
            <defs>
                <clipPath id="clip0_1060_9665">
                    <rect width="24" height="24" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
};

export default BMypage;
