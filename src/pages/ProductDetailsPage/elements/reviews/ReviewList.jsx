import { FaStar } from "react-icons/fa";

const ReviewItem = ({ comment }) => (
  <article className="rounded-xl border border-gray-100 p-4">
    <div className="flex items-center justify-between gap-3">
      <div className="flex items-center gap-3">
        <div className="flex size-9 items-center justify-center rounded-full bg-primary/10 font-dana-DemiBold text-sm text-primary">
          {comment.name?.charAt(0) || "ک"}
        </div>

        <div>
          <p className="font-dana-DemiBold text-sm text-primary-text">
            {comment.name || "کاربر"}
          </p>

          <div className="mt-1 flex items-center gap-2 font-dana-Medium text-xs text-secondary-text">
            <span>خریدار این محصول</span>
            <span className="text-gray-300">|</span>
            <span>{comment.date}</span>
          </div>
        </div>
      </div>

      <div className="flex gap-1 text-yellow-500">
        <FaStar size={14} />
        <span className="font-dana-Medium text-sm">{comment.rating}</span>
      </div>
    </div>

    <p className="mt-4 font-dana-Medium text-sm leading-7 text-secondary-text">
      {comment.text}
    </p>
  </article>
);

const ReviewList = ({ comments }) => {
  if (comments.length === 0) {
    return (
      <p className="py-8 text-center font-dana-Medium text-sm text-secondary-text">
        هنوز نظری برای این محصول ثبت نشده است.
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {comments.map((comment) => (
        <ReviewItem key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default ReviewList;
