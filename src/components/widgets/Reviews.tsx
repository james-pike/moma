import { component$ } from "@builder.io/qwik";
import { twMerge } from "tailwind-merge";
import { Headline } from "~/components/ui/Headline";


interface Item {
  title?: string;
  description?: string;
  icon?: any;
  classes?: Record<string, string>;
}

interface Props {
  id?: string;
  title?: any;
  subtitle?: any;
  highlight?: any;
  items: Array<Item>;
  isDark?: boolean;
  classes?: any;
}

export default component$((props: Props) => {
  const { id, title = "", subtitle = "", highlight = "", classes = {}, isDark = false } = props;

  return (
    
    <section class="relative bg-gradient-to-r from-primary-50 to-primary-25 scroll-mt-16" {...(id ? { id } : {})}>
     
      <div class="absolute inset-0 pointer-events-none -z-[1]" aria-hidden="true">
        <slot name="bg">
          <div class={twMerge("absolute inset-0", isDark ? "bg-dark dark:bg-transparent" : "")}></div>
        </slot>
      </div>
      <div
        class={twMerge(
          "relative mx-auto max-w-5xl px-4 md:px-6 py-9 md:py-12 lg:py-15 text-default",
          classes?.container,
          isDark ? "dark" : ""
        )}
      >
        <Headline title={title} subtitle={subtitle} highlight={highlight} classes={classes?.headline} />
 
        <div class="grid bg-white rounded-md  p-3 md:p-5 gap-8 lg:grid-cols-3 mx-auto max-w-screen-xl">
            <div class="space-y-6">
                <figure class="p-6 bg-gray-100 rounded dark:bg-gray-800">
                    <blockquote class="text-sm text-gray-500 dark:text-gray-400">
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Solid foundation for any project</h3>
                        <p class="my-4">"This is a very complex and beautiful set of elements. Under the hood it comes with the best things from two different worlds: Figma and Tailwind.”</p>
                    </blockquote>
                    <figcaption class="flex items-center space-x-3">
                        <img class="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="profile picture"/>
                        <div class="space-y-0.5 font-medium dark:text-white">
                            <div>Bonnie Green</div>
                            <div class="text-sm font-light text-gray-500 dark:text-gray-400">CTO at Open AI</div>
                        </div>
                    </figcaption>    
                </figure>
                <figure class="p-6 bg-gray-100 rounded dark:bg-gray-800">
                    <blockquote class="text-sm text-gray-500 dark:text-gray-400">
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">A must-have for designers</h3>
                        <p class="my-4">"This is a very complex and beautiful set of elements. Under the hood it comes with the best things from 2 different worlds: Figma and Tailwind.”</p>
                    </blockquote>
                    <figcaption class="flex items-center space-x-3">
                        <img class="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture"/>
                        <div class="space-y-0.5 font-medium dark:text-white">
                            <div>Lana Byrd</div>
                            <div class="text-sm font-light text-gray-500 dark:text-gray-400">Software Engineer at Tesla</div>
                        </div>
                    </figcaption>    
                </figure>
                <figure class="p-6 bg-gray-100 rounded dark:bg-gray-800">
                    <blockquote class="text-sm text-gray-500 dark:text-gray-400">
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Speechless with how easy this was to integrate</h3>
                        <p class="my-4">"I recently got my hands on Flowbite Pro, and holy crap, I'm speechless with how easy this was to integrate within my application. Most templates are a pain, code is scattered, and near impossible to theme."</p>
                    </blockquote>
                    <figcaption class="flex items-center space-x-3">
                        <img class="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="profile picture"/>
                        <div class="space-y-0.5 font-medium dark:text-white">
                            <div>Jese Leos</div>
                            <div class="text-sm font-light text-gray-500 dark:text-gray-400">CEO at Oracle</div>
                        </div>
                    </figcaption>    
                </figure>
            </div>
            <div class="space-y-6">
                <figure class="p-6 bg-gray-100 rounded dark:bg-gray-800">
                    <blockquote class="text-sm text-gray-500 dark:text-gray-400">
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Efficient Collaborating</h3>
                        <p class="my-4">"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application.”</p>
                    </blockquote>
                    <figcaption class="flex items-center space-x-3">
                        <img class="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png" alt="profile picture"/>
                        <div class="space-y-0.5 font-medium dark:text-white">
                            <div>Joseph McFall</div>
                            <div class="text-sm font-light text-gray-500 dark:text-gray-400">Junior Designer at Adobe</div>
                        </div>
                    </figcaption>    
                </figure>
                <figure class="p-6 bg-gray-100 rounded dark:bg-gray-800">
                    <blockquote class="text-sm text-gray-500 dark:text-gray-400">
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Mindblowing workflow and variants</h3>
                        <p class="my-4">"Flowbite provides a robust set of design tokens and components based on the popular Tailwind CSS framework.</p>
                        <p class="my-4">From the most used UI components like forms and navigation bars to the whole app screens designed both for desktop and mobile, this UI kit provides a solid foundation for any project.”</p>
                    </blockquote>
                    <figcaption class="flex items-center space-x-3">
                        <img class="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png" alt="profile picture"/>
                        <div class="space-y-0.5 font-medium dark:text-white">
                            <div>Helene Engels</div>
                            <div class="text-sm font-light text-gray-500 dark:text-gray-400">CFO at Microsoft</div>
                        </div>
                    </figcaption>    
                </figure>
                <figure class="p-6 bg-gray-100 rounded dark:bg-gray-800">
                    <blockquote class="text-sm text-gray-500 dark:text-gray-400">
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Perfect choice for a SaaS application</h3>
                        <p class="my-4">"Flowbite provides a robust set of design tokens and components based on the popular Tailwind CSS framework.</p>
                        <p class="my-4">From the most used UI components like forms and navigation bars to the whole app screens designed both for desktop and mobile, this UI kit provides a solid foundation for any project.”</p>
                    </blockquote>
                    <figcaption class="flex items-center space-x-3">
                        <img class="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png" alt="profile picture"/>
                        <div class="space-y-0.5 font-medium dark:text-white">
                            <div>Leslie Livingston</div>
                            <div class="text-sm font-light text-gray-500 dark:text-gray-400">Creative Director at Apple</div>
                        </div>
                    </figcaption>    
                </figure>
            </div>
            <div class="space-y-6">
                <figure class="p-6 bg-gray-100 rounded dark:bg-gray-800">
                    <blockquote class="text-sm text-gray-500 dark:text-gray-400">
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Solid foundation for any project</h3>
                        <p class="my-4">"I recently got my hands on Flowbite Pro, and holy crap, I'm speechless with how easy this was to integrate within my application. Most templates are a pain, code is scattered, and near impossible to theme."</p>
                    </blockquote>
                    <figcaption class="flex items-center space-x-3">
                        <img class="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture"/>
                        <div class="space-y-0.5 font-medium dark:text-white">
                            <div>Michael Gough</div>
                            <div class="text-sm font-light text-gray-500 dark:text-gray-400">Front-end engineer at Meta</div>
                        </div>
                    </figcaption>    
                </figure>
                <figure class="p-6 bg-gray-100 rounded dark:bg-gray-800">
                    <blockquote class="text-sm text-gray-500 dark:text-gray-400">
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Mindblowing workflow and variants</h3>
                        <p class="my-4">"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application.”</p>
                    </blockquote>
                    <figcaption class="flex items-center space-x-3">
                        <img class="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/neil-sims.png" alt="profile picture"/>
                        <div class="space-y-0.5 font-medium dark:text-white">
                            <div>Neil Sims</div>
                            <div class="text-sm font-light text-gray-500 dark:text-gray-400">Software architect at Amazon</div>
                        </div>
                    </figcaption>    
                </figure>
                <figure class="p-6 bg-gray-100 rounded dark:bg-gray-800">
                    <blockquote class="text-sm text-gray-500 dark:text-gray-400">
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Speechless with how easy this was to integrate</h3>
                        <p class="my-4">"This is a very complex and beautiful set of elements. Under the hood it comes with the best things from 2 different worlds: Figma and Tailwind.”</p>
                    </blockquote>
                    <figcaption class="flex items-center space-x-3">
                        <img class="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/robert-brown.png" alt="profile picture"/>
                        <div class="space-y-0.5 font-medium dark:text-white">
                            <div>Robert Brown</div>
                            <div class="text-sm font-light text-gray-500 dark:text-gray-400">Junior developer at SAP</div>
                        </div>
                    </figcaption>    
                </figure>
            </div>
        </div>   
 
      </div>
    </section>

     
  );
});
