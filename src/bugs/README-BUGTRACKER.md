# Bug Tracking

Knowing which bugs occur is crucial for the maturity of a project. And it is a complex business, where services like [sentry.io](https://sentry.io/) provide great infrastructure to learn the most out of the bugs and be able to fix them. Since privacy in general, and in particular for this project, is important, I tried to find a balance between code quality and privacy concerns.

### Opt-in

It would be sad to lose any bug information if the user is willing to help, but not aware of the feature. A solution to this problem is, to ask the user for permission to track errors at the moment they occur. This will not catch all possible errors, but hopefully most of them. The user still has the possibility to opt-out in the settings.

### Lazy Loading

To make sure no 3rd party code is doing anything in the background without the permission of the user, the related code is only loaded when allowed to. It will not be loaded immediately but "lazily" on demand.

---

If you still have concerns or have ideas for improvement, please write to <dirk.holtwick@gmail.com>
